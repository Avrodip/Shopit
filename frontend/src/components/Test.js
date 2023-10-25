import React from 'react'

const Test = () => {
    const token = localStorage.getItem('token');

    const handleButton = async () => {
      try {
        const response = await fetch("http://localhost:3002/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
          },
        });
  
        if (response.ok) {
       
          const data = await response.json(); 
          console.log(data);
        } else {
  
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    return (
      <div>
        <button onClick={handleButton}>Submit</button>
      </div>
    )
}

export default Test
