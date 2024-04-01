import React, { useState } from 'react'
import SideNav from '../SideNav'
import Products from '../ProductsComponent/ProductsComponent'


//violation of separation of concerns
//redux, mobx,context
function MainComponent() {

  //prop drilling + state in the main component =>to manage component usage
  let [showProducts,setShowProducts] = useState(false);
  let [newVar,setNewVar] = useState(0);
  let [cartCount,setCartCount] =useState(0);
  let [numberOfProducts,setNumberOfProducts] = useState(10);
  let [ascSort, setAscSort] = useState('');
  let [descSort, setDescSort] = useState('');
  let [ascPrice, setAscPrice] = useState('');
  let [descPrice, setDescPrice] = useState('');
  
  //numberOfProducts.initialValue
  
  


  let setMainComponentVariable= function(valueOfNewVar)
  {


    console.log("Setting the value of state variable new Var to:",valueOfNewVar);
      setNewVar(valueOfNewVar);
  }
   
  return (
    <div className='container-fluid'>
  
  <div className='row'>
      <div className='col-lg-2 col-md-3 col-sm-4'>
    
    <p> value of newVar in main component:{newVar}</p>
    <button onClick={()=>{setShowProducts(!showProducts)}}> Click to show or hide products</button>
    <button onClick={() => setAscSort('asc')}>Sort Asc Name</button>
    <button onClick={() => setDescSort('desc')}>Sort Desc Name</button>
    <br/>
    {/* set asc or desc by price */}
    <button onClick={() => {setAscPrice('asc')}}>Sort Asc Price</button>
    <button onClick={() => {setAscPrice('desc')}}>Sort Desc Price</button>
    <SideNav  setNumberOfProducts={setNumberOfProducts} />
    


    </div>
    <div className='col-lg-10 col-md-9 col-sm-8'>
    <Products typeOfProducts={"clothes"} numberOfProducts={numberOfProducts}    showProducts={showProducts} changeMainComponentVariable={setMainComponentVariable}
    ascSort = {ascSort} descSort = {descSort}
    ascPrice = {ascPrice}  />
    </div>
    

    </div>
    </div>

  )
}

export default MainComponent