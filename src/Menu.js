import React from 'react';

const Menu = ({items}) => {
  return (
    <div className="section-center">
       {items.map( items => {
            const {id,title,img,desc,price} = items;
            return (
              <article className="menu-item" key={id}>
                <img src={img} className="photo" alt={title} />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${Math.trunc(price)}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            )
          }
        )}
    
    </div>
  )
};

export default Menu;
