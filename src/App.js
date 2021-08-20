
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Country/Cart/Cart';
import Country from './components/Country/Country';



function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  
  
 
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res =>res.json())
    .then(data =>setCountries(data))
    .catch(error => console.log(error))
    
  }, [])
  const countryHandle=(country)=>{
   // console.log(country);
    const newCountry = [...cart, country];
    setCart(newCountry);
  }
  return (
    <div className="App">
      
        <h1>{countries.length}</h1>

        <h2>Country Count : {cart.length}</h2>
        
         <Cart cart={cart}></Cart>
        
        
        {
          countries.map(country => <Country cn={country} countryHandle={countryHandle} ></Country>)
        }
       
      
       
    
      
    </div>
  );
}

export default App;
