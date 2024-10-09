import TodoApp from "./components/Todo";
import "./App.css";

function App(){
    return (
        <div className="App">
            <h1> <img src="https://static.vecteezy.com/system/resources/thumbnails/003/529/153/small/business-to-do-list-flat-icon-modern-style-free-vector.jpg" height="50px"/>My Todo List</h1>
            <TodoApp/>

        </div>
    );
};

export default App;