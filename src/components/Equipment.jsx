import React, { useState } from 'react';
import './Equipment.css';
import Slider from '@mui/material/Slider';
import BAUERskates1 from '../assets/BAUERskates1.png';
import BAUERskates2 from '../assets/BAUERskates2.png';
import BAUERskates3 from '../assets/BAUERskates3.png';
import CCMskates1 from '../assets/CCMskates1.png';
import CCMskates2 from '../assets/CCMskates2.png';
import gloves1 from '../assets/gloves1.png';
import gloves2 from '../assets/gloves2.png';
import gloves3 from '../assets/gloves3.png';
import gloves4 from '../assets/gloves4.png';
import gloves5 from '../assets/gloves5.png';
import helmet1 from '../assets/helmet1.png';
import helmet2 from '../assets/helmet2.png';
import helmet3 from '../assets/helmet3.png';
import helmet4 from '../assets/helmet4.png';
import helmet5 from '../assets/helmet5.png';
import helmet6 from '../assets/helmet6.png';
import jerseys1 from '../assets/jerseys1.png';
import jerseys2 from '../assets/jerseys2.png';
import jerseys3 from '../assets/jerseys3.png';
import jerseys4 from '../assets/jerseys4.png';

const items = [
  { id: 1, category: 'Helmets', gender: 'Men', brand: 'Bauer', price: 78, image: helmet1 },
  { id: 2, category: 'Helmets', gender: 'Women', brand: 'CCM', price: 100, image: helmet2 },
  { id: 3, category: 'Skates', gender: 'Men', brand: 'Bauer', price: 125, image: BAUERskates1 },
  { id: 4, category: 'Gloves', gender: 'Unisex', brand: 'True Hockey', price: 150, image: gloves1 },
  { id: 5, category: 'Jerseys', gender: 'Women', brand: 'Sher-Wood', price: 60, image: jerseys1 },
  { id: 6, category: 'Skates', gender: 'Women', brand: 'CCM', price: 80, image: CCMskates1 },
  { id: 7, category: 'Helmets', gender: 'Men', brand: 'Warrior', price: 90, image: helmet3 },
  { id: 8, category: 'Gloves', gender: 'Men', brand: 'True Hockey', price: 110, image: gloves2 },
  { id: 9, category: 'Jerseys', gender: 'Unisex', brand: 'Sher-Wood', price: 65, image: jerseys2 },
  { id: 10, category: 'Helmets', gender: 'Women', brand: 'Bauer', price: 85, image: helmet4 },
  { id: 11, category: 'Skates', gender: 'Unisex', brand: 'CCM', price: 130, image: CCMskates2 },
  { id: 12, category: 'Gloves', gender: 'Women', brand: 'Warrior', price: 95, image: gloves3 },
  { id: 13, category: 'Jerseys', gender: 'Men', brand: 'True Hockey', price: 105, image: jerseys3 },
  { id: 14, category: 'Helmets', gender: 'Unisex', brand: 'Sher-Wood', price: 115, image: helmet5 },
  { id: 15, category: 'Skates', gender: 'Men', brand: 'Bauer', price: 140, image: BAUERskates2 },
  { id: 16, category: 'Gloves', gender: 'Men', brand: 'CCM', price: 70, image: gloves4 },
  { id: 17, category: 'Jerseys', gender: 'Women', brand: 'Warrior', price: 120, image: jerseys4 },
  { id: 18, category: 'Helmets', gender: 'Women', brand: 'True Hockey', price: 125, image: helmet6 },
  { id: 19, category: 'Skates', gender: 'Unisex', brand: 'Bauer', price: 145, image: BAUERskates3 },
  { id: 20, category: 'Gloves', gender: 'Men', brand: 'Bauer', price: 135, image: gloves5 }
];


const Equipment = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [priceRange, setPriceRange] = useState([50, 150]);
  const [popupItem, setPopupItem] = useState(null);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories(prev =>
      checked ? [...prev, value] : prev.filter(cat => cat !== value)
    );
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    setSelectedBrands(prev =>
      checked ? [...prev, value] : prev.filter(brand => brand !== value)
    );
  };

  const handleGenderChange = (event) => {
    const { value, checked } = event.target;
    setSelectedGenders(prev =>
      checked ? [...prev, value] : prev.filter(gender => gender !== value)
    );
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const filteredItems = items.filter(item =>
    (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
    (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
    (selectedGenders.length === 0 || selectedGenders.includes(item.gender)) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  );

  const handleAddToCart = (item) => {
    setPopupItem(item);
  };

  const handleClosePopup = () => {
    setPopupItem(null);
  };

  return (
    <div className="equipment-container">
      <h1>Shop <span className="blue-text">Equipment</span></h1>
      <div className="equipment-content">
        <div className="filter-box">
          <div className="left-box">
            <h3>Category</h3>
            <label><input type="checkbox" value="Skates" onChange={handleCategoryChange} /> Skates</label>
            <label><input type="checkbox" value="Helmets" onChange={handleCategoryChange} /> Helmets</label>
            <label><input type="checkbox" value="Gloves" onChange={handleCategoryChange} /> Gloves</label>
            <label><input type="checkbox" value="Jerseys" onChange={handleCategoryChange} /> Jerseys</label>

            <h3>Gender</h3>
            <label><input type="checkbox" value="Women" onChange={handleGenderChange} /> Women</label>
            <label><input type="checkbox" value="Men" onChange={handleGenderChange} /> Men</label>
            <label><input type="checkbox" value="Unisex" onChange={handleGenderChange} /> Unisex</label>

            <h3>Price</h3>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={50}
              max={150}
              step={1}
            />
            <div>
              ${priceRange[0]} - ${priceRange[1]}{priceRange[1] === 150 && '+'}
            </div>
          </div>
          <div className="right-box">
            <h3>Brands</h3>
            <label><input type="checkbox" value="Bauer" onChange={handleBrandChange} /> Bauer</label>
            <label><input type="checkbox" value="CCM" onChange={handleBrandChange} /> CCM</label>
            <label><input type="checkbox" value="Warrior" onChange={handleBrandChange} /> Warrior</label>
            <label><input type="checkbox" value="True Hockey" onChange={handleBrandChange} /> True Hockey</label>
            <label><input type="checkbox" value="Sher-Wood" onChange={handleBrandChange} /> Sher-Wood</label>
            <label><input type="checkbox" value="STX" onChange={handleBrandChange} /> STX</label>
            <label><input type="checkbox" value="Easton" onChange={handleBrandChange} /> Easton</label>
            <label><input type="checkbox" value="Graf" onChange={handleBrandChange} /> Graf</label>
            <label><input type="checkbox" value="Vaughn" onChange={handleBrandChange} /> Vaughn</label>
            <label><input type="checkbox" value="Mylec" onChange={handleBrandChange} /> Mylec</label>
            <label><input type="checkbox" value="Winnwell" onChange={handleBrandChange} /> Winnwell</label>
          </div>
        </div>
        <div className="image-placeholder">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id} className="equipment-item">
                <img src={item.image} alt={item.category} />
                <div className="item-info">
                  <div>{item.category}</div>
                  <div>{item.gender}</div>
                  <div>{item.brand}</div>
                  <div className="price">${item.price}</div>
                  <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))
          ) : (
            <p>Items will appear inside here</p>
          )}
        </div>
      </div>
      {popupItem && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close-btn" onClick={handleClosePopup}>X</span>
            <p>You added {popupItem.gender.toLowerCase()}'s {popupItem.category}, brand {popupItem.brand} to cart!</p>
            <img src={popupItem.image} alt={popupItem.category} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Equipment;
