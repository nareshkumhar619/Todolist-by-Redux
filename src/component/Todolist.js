import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {AddTodo , DeleteTodo , RemoveTodo} from "../Actions/index"
import "./Todo.css";


const Todolist = () => {
  
   const list =useSelector((state) => state.TodoReducer.list);
    const dispatch = useDispatch();
    const [InputData , setInputData] =useState("");
 
  return (
    <>
     <div className='grade'>
  
               <figure>
                      <figcaption>Add Your Todo List Here </figcaption>
              </figure>
    <div className='Add-items'>
            <input className='Input' placeholder='Add Items....'
             value={InputData} 
             onChange={(e) => setInputData(e.target.value)} />
            <i className='fa fa-plus add-btn' onClick={() =>dispatch(AddTodo(InputData),
              setInputData(""))} ></i>
    </div> 
       <div className='Showitems'>
          {
            list.map((elem) => {
              return (
                   <div className='eachItem' key={elem.id}>
                   <h3>{elem.data}</h3>
                <i className='fa fa-trash-alt add-btn2' title='Delete Item' onClick={() =>dispatch(DeleteTodo(elem.id)
                 )} ></i>
              </div>
              )
            })
} </div>

<div className='show'>
  <button onClick={() =>dispatch(RemoveTodo())} className="DEleteAll" type='button'> DeleteAll</button>
</div>
  
       

                
    </div> 
    </>
  )
}

export default Todolist
