import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../redux/slices/recipeSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <nav className='d-flex align-items-center justify-content-between bg-info py-3 px-5'>
      <Link className='fs-2' style={{textDecoration:'none'}} to={'/'}><i class="fa-solid fa-cookie-bite"></i>Tasty</Link>
      {
        insideHome && <input style={{width:'300px'}} className='form-control' onChange={(e)=>dispatch(searchRecipe(e.target.value.toLowerCase()))} type="text" placeholder='Search Products Here!'/>
      }
    </nav>
  )
}

export default Header