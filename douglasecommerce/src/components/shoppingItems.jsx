import Sidebar from "./SideBar/sideBar";
import ShoppingList from "./shopingList/shopingItems";
import products from "./database/database";
import { useState} from 'react'
import Card from "./card";


const ShoppingItems = ({ addToCart}) => {

    const [selectedCategory, setSelectedCategory] = useState(null);
  
    // ----------- Input Filter -----------
    const [query, setQuery] = useState("");
    
    // Items 
    // const [items, setItems] = useState(products);
    // const [chart, setChart ] = useState([]);
    // const [totalCost, setTotalCost] = useState(0);
    // // console.log(items);
  
    // const addToChart = ((id) => {
    //   const selectedItem  = items.find((item) => item.id === id);
    //   setChart([...chart, selectedItem]);
    //   setTotalCost(totalCost + parseFloat(selectedItem.newPrice));
    //   console.log(selectedItem);
    //   onTotalCostChange(totalCost + parseFloat(selectedItem.newPrice));

    // })
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const filteredItems = products.filter(
      (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    
    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    // ------------ Button Filtering -----------
    const handleClick = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    function filteredData(products, selected, query) {
      let filteredProducts = products;
  
      // Filtering Input Items
      if (query) {
        filteredProducts = filteredItems;
      }
  
      // Applying selected filter
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
          addToCart={addToCart}
          {...otherProps}
        />
      ));
    }
  
    const result = filteredData(products, selectedCategory, query);
    return ( 
        <>
            <Sidebar handleChange={handleChange} />
            <ShoppingList result={result}/>
        
        </>
     );
}
 
export default ShoppingItems;