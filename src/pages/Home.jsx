import React, { useEffect, useState } from 'react'
import ViewCard from '../components/ViewCard'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipe } from '../redux/slices/recipeSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {allRecipe,loading,errorMsg} = useSelector(state=>state.recipeReducer)
  const [currentPage,setCurrentPage] = useState(1);
  const recipePerPage = 8;
  const totalPages = Math.ceil(allRecipe?.length/recipePerPage)
  const currentPageRecipeLastIndex = currentPage * recipePerPage
  const currentPageRecipeFirstIndex = currentPageRecipeLastIndex-recipePerPage
  const visibleAllRecipe = allRecipe?.slice(currentPageRecipeFirstIndex,currentPageRecipeLastIndex)

  useEffect(()=>{
    dispatch(fetchRecipe())
  },[])

  const navigateToNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }


  return (
    <>
      <Header insideHome={true}/>
      <div className='text-center mt-5'> 
        <h1 className='fw-bolder'>Recipes</h1>
        <div className='row mt-4'>
          {
            allRecipe?.length>0 && visibleAllRecipe?.map(item=>(
              <div key={item.id} className='col-lg-3 my-2'>
                <ViewCard data={item}/>
              </div>
            ))
          }
        </div>
      </div>
      <div className="text-center my-4">
        <span onClick={navigateToPrevPage}><i className='fa-solid fa-backward me-5'></i></span>
        <span> {currentPage} of {totalPages} </span>
        <span onClick={navigateToNextPage}><i className='fa-solid fa-forward ms-5'></i></span>
      </div>
    </>
  )
}

export default Home