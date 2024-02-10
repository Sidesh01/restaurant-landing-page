// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Restaurant</h1>
        <p>Discover the flavors of our cuisine</p>
        <a
          className="App-link"
          href="#menu"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Menu
        </a>
      </header>
      <section id="menu" className="Menu-section">
        <h2>Our Menu</h2>
        <div className="Menu-items">
          <div className="Menu-item">
            <h3>Appetizers</h3>
            <ul>
              <li>Bruschetta</li>
              <li>Caprese Salad</li>
              <li>Garlic Shrimp</li>
            </ul>
          </div>
          <div className="Menu-item">
            <h3>Main Courses</h3>
            <ul>
              <li>Pasta Carbonara</li>
              <li>Chicken Parmesan</li>
              <li>Grilled Salmon</li>
            </ul>
          </div>
          <div className="Menu-item">
            <h3>Desserts</h3>
            <ul>
              <li>Tiramisu</li>
              <li>Cannoli</li>
              <li>Gelato</li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="App-footer">
        <p>&copy; 2024 Our Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
