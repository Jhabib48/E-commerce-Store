import Sidebar from "./SideBar/sideBar";
import ShoppingList from "./shopingList/shopingItems";
import AdminShoppingList from './adminPage/AdminShopingList'
import products from "./database/database";
import { useState } from 'react';
import Card from "./card";

const AdminProductList = () => {
    // State for input filter
    const [query, setQuery] = useState("");
  
    // State for category filter
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const filteredItems = products.filter(
      (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    function filteredData(products, selected, query) {
      let filteredProducts = products;
  
      if (query) {
        filteredProducts = filteredItems;
      }
  
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ category, color, company, newPrice, title }) =>
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected
        );
      }
  
      return filteredProducts.map(({ id, ...otherProps }) => (
        <Card
          key={id}
          id={id}
          {...otherProps}
        />
      ));
    }
  
    const result = filteredData(products, selectedCategory, query);

    return ( 
        <div>
            <AdminShoppingList result={result}/>
        </div>
     );
}

export default AdminProductList;
