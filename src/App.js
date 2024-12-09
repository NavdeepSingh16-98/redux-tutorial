import logo from './logo.svg';
import './App.css';
import Todo from './pages/Todo';
import TodoList from './pages/TodoList';
import { useSelector,useDispatch } from 'react-redux';
// import { increment,decrement } from './redux/actions';
import UserList from "./pages/UserList"

function App() {

  // const count = useSelector((state)=>state.count.count);
  const dispatch = useDispatch()
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Welcome To App</h1>
      {/* <h1>Count - {count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button> */}
      <Todo/>
      <TodoList/>
      <UserList/>
    </div>
  );
}

export default App;
