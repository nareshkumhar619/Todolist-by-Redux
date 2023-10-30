import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, DeleteTodo, RemoveTodo, updateTodo } from "../Redux/Actions/index";
import "./Todo.css";

const Todolist = () => {
  const list = useSelector((state) => state.TodoReducer.list);
  const dispatch = useDispatch();
  const [InputData, setInputData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editedData, setEditedData] = useState("");

  const handleUpdate = () => {
    dispatch(updateTodo(editId, editedData));
    setEditId(null);
    setEditedData("");
    setIsEditing(false);
  };

  return (
    <>
      <div className='grade'>
        <figure>
          <figcaption>Add Your Todo List Here</figcaption>
        </figure>
        <div className='Add-items'>
          <input
            className='Input'
            placeholder='Add Items....'
            value={InputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i
            className='fa fa-plus add-btn'
            onClick={() => {
              dispatch(AddTodo(InputData));
              setInputData("");
            }}
          ></i>
        </div>
        <div className='Showitems'>
          {list.map((elem) => {
            return (
              <div className='eachItem' key={elem.id}>
                {isEditing && editId === elem.id ? (
                  <>
                    <input
                      value={editedData}
                      onChange={(e) => setEditedData(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update</button>
                  </>
                ) : (
                  <>
                    <h3>{elem.data}</h3>
                    <button
                      className='fa fa-pencil'
                      title='Edit Item'
                      onClick={() => {
                        setIsEditing(true);
                        setEditId(elem.id);
                        setEditedData(elem.data);
                      }}
                    ></button>
                    <i
                      className='fa fa-trash-alt'
                      title='Delete Item'
                      onClick={() => dispatch(DeleteTodo(elem.id))}
                    ></i>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className='show'>
          <button
            onClick={() => dispatch(RemoveTodo())}
            className='DEleteAll'
            type='button'
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todolist;
