import React, { useState } from 'react';
import './App.css';
import  PersistentDrawerLeft from "./components/sideBar.jsx"
import  mockTransactions from "./components/data.js"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import Heading from "./components/heading.jsx"
import BarsDataset from "./components/chart.jsx"
import StickyHeadTable from "./components/checkoutList.jsx"

function App() {
 
let sum = 0
mockTransactions.forEach((transaction) => {
  sum += transaction.cost
  console.log(sum)})
  
  console.log(mockTransactions.cost)



  return (
    <div className='body'>
      
    <Heading />
  <PersistentDrawerLeft />
  <div className="inline-elements">
  <BarsDataset />
  <StickyHeadTable />
  </div>
  
  
</div>
    
  )
}

export default App
