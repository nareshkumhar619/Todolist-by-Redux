const initialData = {
    list: []
}
const TodoReducer =(state=initialData,action) => {
    switch (action.type) {
    case "ADD_TODO":

    const {id ,data } =action.payload;

    return {
        ...state,
        list:[
            ...state.list ,
            {
               id:id,
               data:data
            }
        ]
    }
    case "DELETE_TODO":

    const newlist = state.list.filter((elem) => elem.id !== action.id)

    return{
        ...state,
        list:newlist
    }
    case "REMOVE_TODO":
        return {
            ...state,
            list:[]
        }
       
     case "UPDATE_TODO":
  return {
    ...state,
    list: state.list.map((item) =>
      item.id === action.id ? { ...item, data: action.updatedData } : item
    ),
  };
       default: return state 
}       
}

export default TodoReducer;