import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import data from '../../data/data.json';
import ProductCard from './ProductCard';
import '../../styles/catalog/catalogContainer.css';
import searchsvg from '../../assets/loupe.png';

function CatalogContainer({ doorType }) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30; 
    const [activeFilters, setActiveFilters] = useState({}); 

    useEffect(() => {
        setProducts(data);
        setFilteredProducts(data);
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
                    default:
                        return true;
                }
            });

            // Фильтрация по типу двери
            const matchesDoorType = !doorType || product.type === doorType;

            return matchesSearch && matchesFilters && matchesDoorType;
        });

        setFilteredProducts(filtered);
        if (currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [searchQuery, activeFilters, products, doorType]); // Добавляем doorType в зависимость

    // Обновление активных фильтров
    const handleFilterChange = (updatedFilters) => {
        setActiveFilters(updatedFilters);
    };

    // Пагинация
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    // Фильтры
    const filters = [
        { category: "Производитель", options: ["elporta", "TEMIDOORS", "ООО 'Двери Гранит'", "ЮНИ Двери", "МЕДВЕДВ И К", "Гарда", "DEFORM V"] },
        { category: "Остекление", options: ["Есть", "Нет", "Матовое", "Зеркало"] },
        { category: "Размер полотна", options: ["350 x 2000", "400 x 2000", "600 х 2000", "700 x 2000", "800 x 2000", "900 x 2000","860 x 2050", "880 х 2050", "960 x 2050", "980 х 2000", "1050 x 2070"] }
    ];

    return (
        <div className='catalog-container-main'>
            <div className='filter-section'>
                <div className='search-bar'>
                    <img 
                        src= {searchsvg} 
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
                        <a key={product.id} href={`/catalog/${product.id}`}>
                            <ProductCard 
                                product={product} 
                                onClick={(id) => console.log(`Clicked on product with ID: ${id}`)} 
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => handlePageChange(index + 1)} 
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CatalogContainer;