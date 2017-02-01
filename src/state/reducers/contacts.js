// import  { map, filer } from "ramda"

export const contacts = (state = [], action) => {
  switch (action.type){
    case "ADD_CONTACT":
      return [...state, action.contact]
    default:
      return state
  }
}
