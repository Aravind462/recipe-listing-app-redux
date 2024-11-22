import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Header from '../components/Header'

const View = () => {
  const [data,setData] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    if(sessionStorage.getItem("allRecipe")){
      const allRecipe = JSON.parse(sessionStorage.getItem("allRecipe"))
      setData(allRecipe.find(item=>item.id==id))
    }
  },[])
  return (
    <>
      <Header/>
      <div className='container text-center'>
        <img className='rounded my-5' width={'400px'} src={data.image} alt="" />
        <p><span className='fw-bold'>Cuisine :</span> {data.cuisine}</p>
        <p><span className='fw-bold'>Ingredients :</span> {data.ingredients}</p>
        <p><span className='fw-bold'>Instructions :</span> {data.instructions}</p>
      </div>
    </>
   
  )
}

export default View