import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipe = createAsyncThunk("recipes/fetchRecipe",async ()=>{
    const res = await fetch("https://dummyjson.com/recipes")
    const result = await res.json()
    // console.log(result.recipes);
    sessionStorage.setItem("allRecipe",JSON.stringify(result.recipes))
    return result.recipes
})

const recipeSlice = createSlice({
    name:'recipes',
    initialState:{
        allRecipe:[],
        dummyAllRecipe:[],
        loading:false,
        errorMsg:""
    },
    reducers:{
        searchRecipe : (state,actionByHeader)=>{
            state.allRecipe = state.dummyAllRecipe.filter(item=>item.cuisine.toLowerCase().includes(actionByHeader.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRecipe.fulfilled,(state,apiResult)=>{
            state.allRecipe = apiResult.payload
            state.dummyAllRecipe = apiResult.payload
            state.loading = false
            state.errorMsg = ""
        })
        builder.addCase(fetchRecipe.pending,(state,apiResult)=>{
            state.allRecipe = []
            state.dummyAllRecipe = []
            state.loading = true
            state.errorMsg = ""
        })
        builder.addCase(fetchRecipe.rejected,(state,apiResult)=>{
            state.allRecipe = []
            state.dummyAllRecipe = []
            state.loading = false
            state.errorMsg = "API Call failed"
        })
    }
})

export const { searchRecipe } = recipeSlice.actions
export default recipeSlice.reducer