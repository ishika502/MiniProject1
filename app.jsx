import React, { useState } from 'react' ;
import ToDoList from "./ToDoList" ;

const App =() => {
    const [inputList, setInputList] = useState("");
    const items = (event) => {
        setInputList(event.target.value);
    };
    const [item,setItem] = useState([]);
    const  listofitems=()=>{
        setItem((oldItem)=>{
            return[...oldItem, inputList];
        });
        setInputList("");
    };
    const del = (id) =>{
        console.log("deleted");

        setItem((oldItem)=> {
            return oldItem.filter((arr, index)=>{
                   return index !== id; 
            });
        });
    };
    return<>
        <div className="bg">
            <div className="center">
                <br />
                <h1> ToDo List </h1>
                <br/>
                <input type="text" placeholder="Add an item" value={inputList} onChange={items} />
                <button className="btn" onClick={listofitems}> + </button>
                <ol>
                  {  item.map( (itemval, index)=>{
                      return <ToDoList key={index} id={index} text={itemval} onSelect={del} />;
                    })}
                </ol>
            </div>
        </div>

    </>;
};

export default App ;