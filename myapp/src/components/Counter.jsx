import React from 'react'


var[count,setcount]=useState(0)
const counter=0

const Counter = () => {
  return (
    <div> 
        <br></br>

<Typography variant="h3">count:{count}</Typography> 
<br></br>
<Button variants="contained" color="success" onclick={add}>+</Button>
&nbsp; &nbsp;
<Button variants="contained"color='error'onclick={sub}>-</Button>
   </div>
  )
}

export default Counter