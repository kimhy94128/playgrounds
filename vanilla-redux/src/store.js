import { createStore } from 'redux'

const ADD = 'ADD'
const DELETE = 'DELETE'

const addToDo = (text) => {
  return {
    type: ADD,
    text
  }
}
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id
  }
}

const reducer = (state = JSON.parse(localStorage.getItem('todos')), action) => {
  switch(action.type){
    case ADD:
      localStorage.setItem('todos', JSON.stringify([{ text: action.text, id: Date.now() }, ...state]))
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      localStorage.setItem('todos', JSON.stringify(state.filter(toDo => toDo.id !== action.id)))
      return state.filter(toDo => toDo.id !== action.id)
    default:
      return state;
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addToDo,
  deleteToDo
}

export default store