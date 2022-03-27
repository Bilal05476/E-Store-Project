// import React from 'react';
import user5 from '../images/dashboard/user5.jpg';
import user3 from '../images/dashboard/user3.jpg';
import user1 from '../images/dashboard/user1.jpg';

export const data = [
    {
        id: "1",
        avtar: <img alt="" src={user5} style={{ width: 50, height: 50 }} />,
        f_name: "Rowan",
       
        email: "Rowan.torres@gmail.com",
        
        role: "Customer"
    },
    {
        id: "2",
        avtar: <img alt="" src={user3} style={{ width: 50, height: 50 }} />,
        f_name: "Alonzo",
   
        email: "Perez.Alonzo@gmail.com",
    
        role: "Customer"
    },
    {
        id: "3",
        avtar: <img alt="" src={user1} style={{ width: 50, height: 50 }} />,
        f_name: "Skylar",
        
        email: "Lane.Skylar@gmail.com",
      
        role: "Customer"
    }
]
export default data

