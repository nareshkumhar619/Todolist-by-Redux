export const AddTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const DeleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}
export const RemoveTodo = () => {
    return {
        type: "REMOVE_TODO"
    }
}
export const UPDATE_TODO = "UPDATE_TODO";

export const updateTodo = (id, updatedData) => {
  return {
    type: UPDATE_TODO,
    id,
    updatedData,
  };
};