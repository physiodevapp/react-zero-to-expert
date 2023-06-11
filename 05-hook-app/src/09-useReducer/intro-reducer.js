const initialState = [{
  id: 0,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}];

const todoReducer = (state = initialState, action = {}) => {

  if (action.type === '[TODO] add action') {
    return [...state, action.payload]
  }

  return state
}

let todo = todoReducer()

const newTodo = {
  id: 1,
  todo: 'Recolectar la piedra del Poder',
  done: false,
}

const todoAddAction = {
  type: '[TODO] add action',
  payload: newTodo,
}

todo = todoReducer(todo, todoAddAction)

console.log({state: todo})
