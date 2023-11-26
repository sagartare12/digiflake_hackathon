import React, { useEffect } from 'react';
import axios from 'axios';

import  Cookie  from 'universal-cookie';


const Users = () => {


 
    // console.log( cookies.get('jwt'));
 
        const fetchUsers =async()=>{
            const cookies = document.cookie.split(';');
            console.log(cookies)
     
            try {
                const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/users`,{
                    method:"GET",
                    headers:{
                        'content-type':'application/json',
                        'Authorization': `Bearer jwt`
                      },
                    credentials:'include', 
                })

                const res= await fetchData.json();
                console.log(res);
               
        
                // Access cookies from the response headers
        
                // Handle the rest of the response data
                
              } catch (error) {
                // Handle errors
                console.error('Error fetching data:', error);
              }
        }
       
   
  return (
    <div>
      <button onClick={fetchUsers}>All Users</button>
    </div>
  )
}

export default Users
