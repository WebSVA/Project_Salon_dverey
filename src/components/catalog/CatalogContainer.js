import React, { useEffect, useState, useRef } from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import ProductCatalog from './ProductCatalog';
import '../../styles/catalog/catalogContainer.css';
import searchsvg from '../../assets/loupe.png';

const colorGroups = {
        "Белый": ["White","Snow Veralinga", "Ash White", "Alaska", "Alaska Black Star", "Белая Шагрень", "Бьянко", "Эмаль белая","White Wood", "Белый, RAL 9003, 9010, 1013, 7044, 5014, 1019", "Более 20 различных цветов" ],
        "Бежевый": ["Cappuccino Veralinga", "Art Wood Light", "Light Sonoma", "Vanila", "Capuchino","Белёный Дуб", "Эшвайт", "Stone Wood", "Stone Wood", "Эмаль ваниль", "Эмаль капучино", "Белый, RAL 9003, 9010, 1013, 7044, 5014, 1019", "Более 20 различных цветов"],
        "Cветло-серый": ["Nordic Grey Oak", "Bianco Veralinga", "Nardo Grey", "Nardo Grey Black Star", "Grey", "Сканди Классик", "Бетон Светлый", "Grey Wood", "Sky Wood", "Cream Wood", "Эмаль грэй", "Более 20 различных цветов"],
        "Темный": ["Wenge Veralinga","Art Wood Dark","Grafit","Дуб Дымчатый","Дуб шале-графит","Дуб шфле-корица","Бетон Светлый","Венге","Сканди Венге","Эмаль графит", "Более 20 различных цветов"],
        "Под покраску": ["Под покраску"]
    };
    
function CatalogContainer({ doorType, resetFilters, onResetFilters }) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;
    const [activeFilters, setActiveFilters] = useState({});
    const scrollPositionRef = useRef(0);


    useEffect(() => {
        if (resetFilters) {
          setActiveFilters({});
          sessionStorage.removeItem('activeFilters');
          onResetFilters(false); 
        }
      }, [resetFilters, onResetFilters]);

    useEffect(() => {
        
        const isPageReloaded = sessionStorage.getItem('pageReloaded');

        if (!isPageReloaded) {
            const savedFilters = sessionStorage.getItem('activeFilters');
            if (savedFilters) {
                setActiveFilters(JSON.parse(savedFilters)); 
                setSearchQuery(JSON.parse(savedFilters)); 
            }
        } else {
          
            setActiveFilters({});
            setSearchQuery(''); 
            sessionStorage.removeItem('searchQuery'); 
            
        }

        sessionStorage.setItem('pageReloaded', 'true');

        return () => {
            sessionStorage.removeItem('pageReloaded');
        };
    }, []);

    useEffect(() => {
     

        const expandedProducts = data.flatMap(product => 
            Object.entries(product.color).map(([colorName, colorImage]) => ({
                ...product,
                colorName,
                colorImage
            }))
        );
        setProducts(expandedProducts);
        setFilteredProducts(expandedProducts);
        
    }, []);

    useEffect(() => {
        const storedSearchQuery = sessionStorage.getItem('searchQuery');
        if (storedSearchQuery) {
            setSearchQuery(storedSearchQuery);
        }
    }, []);
    
    useEffect(() => {
        if (searchQuery) {
            sessionStorage.setItem('searchQuery', searchQuery);
        }
    }, [searchQuery]);  // Сохраняем в sessionStorage только когда searchQuery меняется
    

    useEffect(() => {
        const normalizeString = (str) => str.replace(/\s+/g, '').toLowerCase(); // Удаляем пробелы и приводим к нижнему регистру
    
        const filtered = products.filter(product => {
            const normalizedSearchQuery = normalizeString(searchQuery); // Нормализуем поисковый запрос
            const matchesSearch = 
                normalizeString(product.name).includes(normalizedSearchQuery) || 
                normalizeString(product.fabricator).includes(normalizedSearchQuery); // Нормализуем названия перед сравнением
    
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
        if (currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [searchQuery, activeFilters, products, doorType]);
   
    useEffect(() => {
        window.scrollTo(0, scrollPositionRef.current || 0);
    }, []);

    const handleLinkClick = () => {
        scrollPositionRef.current = window.scrollY;
    };

    const handleFilterChange = (updatedFilters) => {
        setActiveFilters(updatedFilters);
        sessionStorage.setItem('activeFilters', JSON.stringify(updatedFilters)); 
        if (Object.keys(updatedFilters).length === 0) {
        setSearchQuery(''); // Очищаем поисковый запрос, если фильтры сброшены
    }
    };

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const visiblePageCount = 5; 
    const startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2));
    const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

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
        filters.push({ category: "Цвет", options: Object.keys(colorGroups) }); 
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
                <Filter 
                        filters={filters} 
                        onFilterChange={handleFilterChange} 
                        resetFilters={resetFilters} 
                        onResetFilters={onResetFilters} 
                    />
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
                                onClick={() => {}} 
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="pagination">
                {startPage > 1 && (
                    <button onClick={() => handlePageChange(1)}>1</button>
                )}
                {startPage > 2 && <span>...</span>}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button 
                            key={pageNumber} 
                            onClick={() => handlePageChange(pageNumber)} 
                            className={currentPage === pageNumber ? 'active' : ''}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
                {endPage < totalPages - 1 && <span>...</span>}
                {endPage < totalPages && (
                    <button onClick={() => handlePageChange(totalPages)}>
                        {totalPages}
                    </button>
                )}
            </div>
        </div>
    );
}


export default CatalogContainer;
