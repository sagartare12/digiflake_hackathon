import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addUser } from '../store/slices/UserSlice';
import Users from './Users';

const Contact = () => {
  const dispatch = useDispatch();
  const userList =useSelector(state => state.users)
  const adduser = ()=>{
    let user = {
      id:1,
      name:'sagare'
    }
    dispatch(addUser(user))
  }


  return (
    <div>
      {/* <button onClick={adduser} >Add user</button>
      {
        userList.map((e)=>{
          return(
            <li>{e.name}</li>
          )
        })
      } */}
      <Users />
    </div>
  )
}

export default Contact