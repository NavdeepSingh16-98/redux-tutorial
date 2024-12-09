import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import fetchUsers from "../redux/userActions"
function UserList2 (){

    const dispatch = useDispatch();
    const {loading, data:users,error} = useSelector((state)=>state.users)

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

if (loading) return <p>Loading ...</p>
if(error) return <p> {error}</p>
return(
    <>
    <h1>User List Component</h1>

    <ul>
        {
        loading?"List is Loading":(
            users.map((user)=><li key={user.id}>{user.name}</li>)
        )
        }
        </ul>
        </>
)
}

export default UserList2