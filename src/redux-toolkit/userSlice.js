import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{

    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})

const userSlice = createSlice({
    name:"users",
    initialState:{
loading:false,
data:[],
error:null

    },
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(fetchUsers.pending,(state)=>{
    state.loading = true;
    state.error = null;
}).addCase(fetchUsers.fulfilled,(state,action)=>{
    state.loading = false;
    console.log("action payload comes here",action.payload)
    state.data = action.payload
}).addCase(fetchUsers.rejected,(state,action)=>{

    state.loading = false;
    state.error = action.error.message;
})

        

    }
})

export default userSlice.reducer