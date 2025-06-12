import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Eat');

  // Set initial active tab on component mount
  useEffect(() => {
    // Simulate clicking the "Eat" tab by default
    setActiveTab('Eat');
  }, []);

  const openMenu = (menuName) => {
    setActiveTab(menuName);
  };

  return (
    <div className="menu-container" id="menu">
      <div className="menu-content">
        <h5 className="menu-heading">
          <span className="menu-tag">THE MENU</span>
        </h5>

        <div className="menu-tabs">
          <div 
            className={`menu-tab ${activeTab === 'Eat' ? 'active' : ''}`}
            onClick={() => openMenu('Eat')}
          >
            Eat
          </div>
          <div 
            className={`menu-tab ${activeTab === 'Drinks' ? 'active' : ''}`}
            onClick={() => openMenu('Drinks')}
          >
            Drink
          </div>
        </div>

        <div className={`menu-items ${activeTab === 'Eat' ? 'show' : 'hide'}`} id="Eat">
          <div className="menu-item">
            <h5>Bread Basket</h5>
            <p className="menu-text">Assortment of fresh baked fruit breads and muffins 5.50</p>
          </div>
          
          <div className="menu-item">
            <h5>Honey Almond Granola with Fruits</h5>
            <p className="menu-text">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
          </div>
          
          <div className="menu-item">
            <h5>Belgian Waffle</h5>
            <p className="menu-text">Vanilla flavored batter with malted flour 7.50</p>
          </div>
          
          <div className="menu-item">
            <h5>Scrambled eggs</h5>
            <p className="menu-text">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
          </div>
          
          <div className="menu-item">
            <h5>Blueberry Pancakes</h5>
            <p className="menu-text">With syrup, butter and lots of berries 8.50</p>
          </div>
        </div>

        <div className={`menu-items ${activeTab === 'Drinks' ? 'show' : 'hide'}`} id="Drinks">
          <div className="menu-item">
            <h5>Coffee</h5>
            <p className="menu-text">Regular coffee 2.50</p>
          </div>
          
          <div className="menu-item">
            <h5>Chocolato</h5>
            <p className="menu-text">Chocolate espresso with milk 4.50</p>
          </div>
          
          <div className="menu-item">
            <h5>Corretto</h5>
            <p className="menu-text">Whiskey and coffee 5.00</p>
          </div>
          
          <div className="menu-item">
            <h5>Iced tea</h5>
            <p className="menu-text">Hot tea, except not hot 3.00</p>
          </div>
          
          <div className="menu-item">
            <h5>Soda</h5>
            <p className="menu-text">Coke, Sprite, Fanta, etc. 2.50</p>
          </div>
        </div>

        <img 
          src="https://www.w3schools.com/w3images/coffeehouse2.jpg" 
          alt="Coffee house" 
          className="menu-image" 
        />
      </div>
    </div>
  );
};

export default Menu;