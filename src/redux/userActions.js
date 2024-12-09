import axios from "axios"

const fetchUsers = ()=>{


    return async (dispatch)=>{

dispatch({type:"FETCH_USERS_REQUEST"})
try{

    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    dispatch({type:"FETCH_USERS_SUCCESS",payload:response.data})

}catch(error){

dispatch({type:"FETCH_USERS_FAILURE",payload:error.message})

}

    }
}

export default fetchUsers
