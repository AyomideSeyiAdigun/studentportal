import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {createStore,combineReducers} from  'redux'

const initialContent = 'Home'
const adminContent = (state=initialContent,action)=>{
  if(action.type ==='regCourse'){
    state = action.payload+'Regcourse'
    return state
  }
  else if(action.type ==='stdList'){
    state = action.payload+'stdlist'
    return state
  }
  else if(action.type ==='lecturer'){
    state = action.payload+'lect'
    return state
  }
  else if(action.type =='personal'){
    state = action.payload
    return state
  }
  else if(action.type ==='regStd'){
    state = action.payload
    return state
    
  }
  else if(action.type ==='courseRegd'){
    state = action.payload +'Regstcourse'
    return state
  }
  else if(action.type ==='department'){
    state = action.payload  
    return state
  }
  else if(action.type ==='faculty'){
    state = action.payload  
    return state
  }
  return state
}

const staffContent=(state =initialContent,action)=>{
  if(action.type ==='staffPart'){
    state = action.payload
    return state
  }else {
    return state;
  }
  return state;
}
const studentContent=(state =initialContent,action)=>{
  if(action.type ==='studentPart'){
    state = action.payload
    return state
  }else {
    return state
  }
  return state
}

let initstate ={teachfaculty:'',department:'',courseList:'',nonteachFaculty:''}
const backendContent=(state =initstate,action)=>{
  if(action.type ==='backendcontent'){
    let {teachfaculty,department,courseList,nonteachFaculty}=action.payload
    state={teachfaculty,department,courseList,nonteachFaculty}

    return state
  }else {
    return state
  }
  return state
}


const allReducers = combineReducers({
  Admin:adminContent,
  Staff:staffContent,
  Student:studentContent,
  backendCont:backendContent
})
const AdminContentDisplay = createStore(allReducers)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider  store={AdminContentDisplay}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
