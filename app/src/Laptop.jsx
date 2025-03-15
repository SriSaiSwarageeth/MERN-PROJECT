import React, { useEffect, useState } from 'react'
import axios from "axios"


const Laptop = () => {
    let [laptops , setLaptops] = useState([])

    let fetchlaptops = async() => {
       let res = await axios.get("http://localhost:3000/users")
       console.log(res.data);
       setLaptops(res.data)
    }

    useEffect(() => {
        fetchlaptops()
    },[])

  return (
    <div>
      
        {
            laptops.map((value , index) => {
             return(<div id='parent' key={index}>
                      <img src={value.pimage} />
                      <h3>{value.pname}</h3>
                      <h3>{value.pcost}</h3>
                   </div>
             )
            })
        }
    </div>
  )
}

export default Laptop
