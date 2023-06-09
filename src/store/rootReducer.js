import initialState from './initialState'

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        ...state,
        questions: action.payload
      }
    case 'SET_VIEW':
      return {
        ...state,
        view: action.payload
      }
    default:
      return state
  }
}

export default rootReducer