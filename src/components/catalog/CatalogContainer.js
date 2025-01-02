import React, { useEffect, useState, useRef } from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import ProductCatalog from './ProductCatalog';
import '../../styles/catalog/catalogContainer.css';
import searchsvg from '../../assets/loupe.png';

const colorGroups = {
        "Белый": ["White","Snow Veralinga", "Ash White", "Alaska", "Alaska Black Star", "Белая Шагрень", "Бьянко", "Эмаль белая","White Wood" ],
        "Бежевый": ["Cappuccino Veralinga", "Art Wood Light", "Light Sonoma", "Vanila", "Capuchino","Белёный Дуб", "Эшвайт", "Stone Wood", "Stone Wood", "Эмаль ваниль", "Эмаль капучино"],
        "Cветло-серый": ["Nordic Grey Oak", "Bianco Veralinga", "Nardo Grey", "Nardo Grey Black Star", "Grey", "Сканди Классик", "Бетон Светлый", "Grey Wood", "Sky Wood", "Cream Wood", "Эмаль грэй"],
        "Темный": ["Wenge Veralinga","Art Wood Dark","Grafit","Дуб Дымчатый","Дуб шале-графит","Дуб шфле-корица","Бетон Светлый","Венге","Сканди Венге","Эмаль графит"],
        "Под покраску": ["Под покраску"]
    };
    
function CatalogContainer({ doorType }) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;
    const [activeFilters, setActiveFilters] = useState({});
    const scrollPositionRef = useRef(0); 

    useEffect(() => {
        setProducts(data);
        setFilteredProducts(data);
        
        const savedFilters = sessionStorage.getItem('activeFilters');
        if (savedFilters) {
            setActiveFilters(JSON.parse(savedFilters)); 
        }
    }, []);


    useEffect(() => {
        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilters = Object.entries(activeFilters).every(([category, values]) => {
                if (!values.length) return true;
                switch (category) {
                    case "Производитель":
                        return values.includes(product.fabricator);
                    case "Размер полотна":
                        return product.size.some(size => values.includes(size));
                    case "Остекление":
                        return values.some(value => {
                            if (value === "Есть") {
                                return product.glass !== "";
                            }
                            if (value === "Нет") {
                                return product.glass === "";
                            }
                            return product.glass.toLowerCase().includes(value.toLowerCase());
                        });
                    case "Цвет":
                        return values.some(value => 
                            colorGroups[value]?.includes(product.colorName)
                        ); 
                    default:
                        return true;
                }
            });
    
            const matchesDoorType = !doorType || product.type === doorType;
    
            return matchesSearch && matchesFilters && matchesDoorType;
        });
    
        setFilteredProducts(filtered);

        // Сброс текущей страницы на 1, если фильтры или поиск изменяются
        if (currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [searchQuery, activeFilters, products, doorType]);

    // Логика для получения текущих продуктов на основе пагинации
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Восстановление скролла
    useEffect(() => {
        window.scrollTo(0, scrollPositionRef.current || 0);
    }, []);

    const handleLinkClick = () => {
        scrollPositionRef.current = window.scrollY; 
    };

    const handleFilterChange = (updatedFilters) => {
        setActiveFilters(updatedFilters);
        sessionStorage.setItem('activeFilters', JSON.stringify(updatedFilters));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    const filters = [
        {
            category: "Производитель",
            options: (() => {
                if (doorType === 'Межкомнатная дверь') {
                    return ["elporta", "ЮНИ Двери", "DEFORM V", "Динмар"];
                } else if (doorType === 'Входная дверь') {
                    return ["elporta", "TEMIDOORS", "ООО 'Двери Гранит'", "МЕДВЕДВ И К", "Гарда", "Юркас", "torex"];
                } else {
                    return [
                        "elporta", "ЮНИ Двери", "DEFORM V", "Динмар",
                        "TEMIDOORS", "ООО 'Двери Гранит'", "МЕДВЕДВ И К", "Гарда", "Юркас", "torex"
                    ];
                }
            })()
        },
        { 
            category: "Остекление",
            options: (() => {
                if (doorType === 'Межкомнатная дверь') {
                    return ["Есть", "Нет", "Матовое"];
                } else {
                    return ["Есть", "Нет", "Матовое", "Зеркало"];
                }
            })()
        }
    ];
    
    if (doorType === "Межкомнатная дверь") {
        filters.push({ category: "Цвет", options: Object.keys(colorGroups) }); // Добавляем новый фильтр по цвету
    }

    return (
        <div className='catalog-container-main'>
            <div className='filter-section'>
                <div className='search-bar'>
                    <img 
                        src={searchsvg} 
                        alt="Search" 
                        className="icon-image" 
                    /> 
                    <input
                        type='text'
                        placeholder='Поиск...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='search-input' 
                    />
                </div>
                <Filter filters={filters} onFilterChange={handleFilterChange} />
            </div>
            <div className='catalog-container'>
                <div className="product-list">
                    {currentProducts.map(product => (
                        <Link 
                            className='a' 
                            key={`${product.id}-${product.colorName}`} 
                            to={`/catalog/${product.id}?color=${product.colorName}`}
                            onClick={handleLinkClick}
                        >
                            <ProductCatalog 
                                product={product} 
                                onClick={(id) => console.log(`Clicked on product with ID: ${id}`)} 
                              
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => handlePageChange(index + 1)} 
                        className={currentPage === index + 1 ? 'active' : ''}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}


export default CatalogContainer;