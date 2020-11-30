import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

const allCategories = ["all",...new Set(data.map( d => d.category))];

function App() {
  const [items,setItems] = useState(data);
  const [categories,setCategories] = useState(allCategories)

  const filterItem = (category) => {
    if (category === "all") {
      setItems(data);
      return
    }
      const newItem = data.filter(item => item.category === category)
      setItems(newItem);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
          <Categories categories={categories} filterItem={filterItem}/>
          <Menu items={items} />
      </section>
    </main>
  )
}

export default App;
