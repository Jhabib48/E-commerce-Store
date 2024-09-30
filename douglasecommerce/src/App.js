import Hero from "./components/hero";
import Navbar from "./components/NavBar/navBar";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import Partners from "./components/partner";
import Login from "./components/login";
import CreateAccount from "./components/createAccount";
import TopProducts from "./components/popularProduct";
import DisplayFeedBack from "./components/displayReview";
import {useEffect, useState} from 'react'
import Product from "./components/product";
import Sidebar from "./components/SideBar/sideBar";
import ShoppingList from "./components/shopingList/shopingItems";
import products from "./components/database/database";
import Card from "./components/card";
import Chart from "./components/shoppingChar/chart";
import AdminPage from './components/adminPage/admin';
import data from "./components/database/database";
import PaymentForm from './components/paymentForm'
import axios from "axios";
import {Route, Routes, useNavigate} from 'react-router-dom'
import Home from "./components/home";
import ShoppingItems from "./components/shoppingItems";
import AdminNavBar from "./components/adminNavBar";
import AdminDashBoard from "./components/adminDashboard";

function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    const fetchCustomers = async () =>{
      try{
        const response = await fetch('http://localhost:8080/customer/customerList');
        const data = await response.json();
        console.log(data);
        setCustomer(data);
      }
      catch(error){
        console.log("Error while fetching Customer data: " + error);
      }
    };
    fetchCustomers(); 
  }, [])
  
  //Items 
  const [items, setItems] = useState(products);
  const [itemCount, setItemCount] = useState(0)
  const [chart, setChart ] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [customer, setCustomer] = useState([]);

  //let count = items.length; 
  //setItemCount(10);

  const addToChart = ((id) => {
    const selectedItem  = items.find((item) => item.id === id);
    setChart([...chart, selectedItem]);
    const updatedTotalCost = totalCost + parseFloat(selectedItem.newPrice);
    setTotalCost(updatedTotalCost);
    setItemCount(chart.length + 1) //update the number of items in the chart + 1 since index starts at 0
    console.log(totalCost);
  });
  
  //ADMIN CREATE NEW USER
  const createCustomer = async (firstName, lastName, emailAddress, password ) => {
    const url = 'http://localhost:8080/customer/addCustomer';

    try{
      const newUser = {
        firstName,
        lastName,
        emailAddress,
        password
      };
      const {data, status} = await axios.post(url, newUser);
  
      if(status === 200){
        console.log(data); 
        setCustomer([...customer, data]);
      }
    }
    catch(error){
      console.log("Error while adding new customer: " + error);
    }
  }

  //Create user 
  const createCustomerAccount = async (firstName, lastName, emailAddress, password ) => {
    const url = 'http://localhost:8080/customer/addCustomer';

    try{
      const newUser = {
        firstName,
        lastName,
        emailAddress,
        password
      };
      const {data, status} = await axios.post(url, newUser);
  
      if(status === 200){
        console.log(data); 
        setCustomer([...customer, data]);
        navigate("/");
      }
    }
    catch(error){
      console.log("Error while adding new customer: " + error);
    }
  }

  //REMOVE USER
  const removeCustomer = async (user) => {
    console.log("Delete Handeled")
    const url = `http://localhost:8080/customer/deleteCustomer/${user.id}`

    try{
      const {status} = await axios.delete(url); 
      if(status===200){
        setCustomer(customer.filter(customer => customer.id !== user.id));
      }else{
        console.log("Error while getting status"); 
      }
    }
    catch(error){
      console.log("Error while Deleting customre: " + error);
    }
  }

  //UPDATE USER
  const updateCustomer = async (id, firstName, lastName, emailAddress, password ) => {
    console.log("Update Handled");
    const url = `http://localhost:8080/customer/updateCustomer/${id}`;

    try{
      const {data, status} = await axios.put(url, {firstName, lastName, emailAddress, password} )
      if(status===200){
        const index = customer.findIndex(customer => customer.id === id); 
        const newCustomer = [...customer]; 
        newCustomer[index] = data; 
        setCustomer(newCustomer); 
      }
    }
    catch(error){
      console.log("Error while updating user: " + error);
    }
  }
  
  const checkIfUserExits = (emailAddress, password) => {
    const ifCustomerExist = customer.some(customer => customer.password === password && customer.emailAddress === emailAddress);
    if(ifCustomerExist){
      console.log("Successfully logged in");
      navigate("/");
    }
    else{
      throw new Error("Customer dosn't exit");
    }
  } 


  //console.log(chart);
  // console.log("Number Of Items: " + itemCount)
  return (
    <div className="App">
      <Navbar count={itemCount} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shoppingchart" element={<ShoppingItems addToCart={addToChart} />} />
        <Route path="/admin" element={<AdminDashBoard userData={customer} onRemove={removeCustomer} onUpdateForm={updateCustomer} onAdd={createCustomer} />} />
        <Route path="/chart" element={<Chart item={chart} totalCost={totalCost} />} />
        <Route path="/signup" element={<CreateAccount addNewCustomer={createCustomerAccount} />} />
        <Route path="/login" element={<Login checkIfUserExist={checkIfUserExits} />} />
        <Route path="/paymentForm" element={<PaymentForm />} />
      </Routes>
    </div>
  );
}


export default App;









// const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const filteredItems = products.filter(
  //   (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );
  
  // // ----------- Radio Filtering -----------
  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // // ------------ Button Filtering -----------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // function filteredData(products, selected, query) {
  //   let filteredProducts = products;

  //   // Filtering Input Items
  //   if (query) {
  //     filteredProducts = filteredItems;
  //   }

  //   // Applying selected filter
  //   if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ category, color, company, newPrice, title }) =>
  //         category === selected ||
  //         color === selected ||
  //         company === selected ||
  //         newPrice === selected ||
  //         title === selected
  //     );
  //   }

  //   return filteredProducts.map(({ id, ...otherProps }) => (
  //     <Card
  //       key={id}
  //       id={id}
  //       addToCart={addToChart}
  //       {...otherProps}
  //     />
  //   ));
  // }

  // const result = filteredData(products, selectedCategory, query);
  //console.log(chart);

    // {/* <Login checkIfUserExist={checkIfUserExits} /> */}
    //     {/* <PaymentForm/> */}
    //     {/* <AdminPage userData={customer} onRemove={removeCustomer} onUpdateForm={updateCustomer} onAdd={createCustomer} /> */}
    //     {/* FIX THE SIDE BAR SPACING AND CHANGE THE PICTURE  */}
    //     {/* <Navbar/> */}
    //     {/* //Pass up the total cost from shopping list into chart to get total and also pass chart
    //     <Sidebar handleChange={handleChange} />
    //     <ShoppingList result={result}/> */}
    //     {/* <Chart 
    //       item={chart} 
    //       totalCost={totalCost}
        
    //     /> */}
    //     {/* <ShoppingItems/> */}

    //     {/* <CreateAccount addNewCustomer={createCustomer}/> */}
        

    //     {/* <Item/> */}
    //     {/* <Hero/> */}
    //     {/* Fix the headline here  */}
    //     {/* <Blogs/>
    //     <TopProducts /> */}
    //     {/* <Product/> */}
      
    
    //     {/* <DisplayFeedBack/>
    //     <Partners/>
    //     <Footer/> */}
      

    //     {/* <Hero/>
    //     <Blogs/>
    //     <DisplayFeedBack/>
    //     <Partners/>
    //     <Footer/> */}

    //     {/* <Login/>
    //     <CreateAccount/> */}