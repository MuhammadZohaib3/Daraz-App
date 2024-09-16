//  import  { useEffect, useState} from 'react';
import { useEffect, useState } from "react";
import CardContext from "./context/card";
import AppRouter from "./config/AppRouter";
// import AppRouter from "./config/AppRouter";

function App() { 
   const [ card, setCard ] = useState(0);
   useEffect(() => {
    const card = JSON.parse(localStorage.getItem('card')) || [];
   setCard(card.length)
   }, [])

//  const [todos, setTodos] = useState([]);
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const data = await response.json();
//         setTodos(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);



return (
//   <div>
//          {todos.map((todo) => (
//           <div key={todo.id}>
//             <h4>{todo.title}</h4>
//             <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
//           </div>
//         ))}
//       </div>

// );
<>
{/* <AppRouter /> */}
<CardContext.Provider value={{ card, setCard }}>
  <AppRouter  />
</CardContext.Provider>
    </>
)
 };

export default App;







