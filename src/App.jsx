import React, { useEffect, useState } from 'react'
import Navbar from './assets/components/Navbar'
import Card from './assets/components/Card'
import axios from 'axios'
//react app for cards props 
function App() {
    const [products, setProducts] = useState(null);

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products)
        setProducts(res.data.products)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
     <>
     <Navbar/>
      <div className='flex justify-center gap-5 flex-wrap mt-[2rem] '>
      {products ? 
      products.map((item)=>{
        return <Card key={item.id} title={item.title} description={item.description} img={item.thumbnail} price={item.price} />
      })
      : <h1><span className="loading loading-spinner loading-xl"></span></h1>}
      </div>
     </>
  )
}

export default App