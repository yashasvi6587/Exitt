import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import '../Styles/Collection.css';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const togglecategory = (e) => {
    const value = e.target.value;
    setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const togglesubcategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const applyfilters = () => {
    let productscopy = products.slice();
    if (showSearch && search) {
      productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productscopy = productscopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productscopy = productscopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productscopy);
  };

  const sortproduct = () => {
    let fpcopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpcopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpcopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyfilters();
        break;
    }
  };

  useEffect(() => {
    sortproduct();
  }, [sortType]);

  useEffect(() => {
    applyfilters();
  }, [category, subCategory, search, showSearch, products]);

  return (
    <div className="collection-wrapper bg-white dark:bg-black text-black dark:text-white py-10 px-4 md:px-10 transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left: Filter Sidebar */}
        <div className="lg:w-1/4 border border-gray-300 dark:border-gray-700 rounded-lg p-5 filter-box">
          <div className="mb-6">
            <p className="text-lg font-semibold mb-3">CATEGORIES</p>
            {['DUST & FREEDOM', 'MIDNIGHT RUN', 'BROTHERHOOD / SISTERHOOD','LAP RAGE'].map((cat, index) => (
              <label key={index} className="block mb-2 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                <input type="checkbox" value={cat} onChange={togglecategory} className="mr-2" />
                {cat}
              </label>
            ))}
          </div>

          <div>
            <p className="text-lg font-semibold mb-3">TYPE</p>
            {['TopWear', 'BottomWear', 'WinterWear'].map((type, index) => (
              <label key={index} className="block mb-2 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                <input type="checkbox" value={type} onChange={togglesubcategory} className="mr-2" />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Right: Products & Sorting */}
        <div className="lg:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <Title text1="ALL" text2="COLLECTIONS" />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="px-4 py-1 text-sm border border-gray-300 dark:border-gray-600 bg-transparent rounded-md focus:outline-none hover:scale-105 transition-all"
            >
              <option value="relavent">Sort By: Relevance</option>
              <option value="low-high">Sort By: Low - High</option>
              <option value="high-low">Sort By: High - Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {filterProducts.map((item, index) => (
              <div key={index} className='group rounded-xl p-2 text-white md:p-3 border border-gray-200 dark:border-zinc-800 bg-black dark:bg-white shadow-md hover:shadow-glow transform transition-all duration-300 hover:-translate-y-2'>
              <ProductItem
                
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
