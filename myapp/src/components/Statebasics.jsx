import React,{useState} from 'react';
import{Textfield,Typography,Button} from '@mui/material';
const Statebasics = () => {
  var[name,fname]=useState["Yathi"]
  var[val,setval]=useState()
  var[sub,setsub]=useState()
  const handleInput=(e)=>{
    setval(e.target.value);
  

  }
  const SubmitHandler=()=>{
    console.log("clicked")
    setsub(val)
  }
  return (

    <div>
      <br /><br /><br /><br /><br /><br /><br />
    <Typography variant='h6'>Statebasics</Typography>  
    <Textfield varients="outline" onchange={handleInput}/>
    <Button varient="contained" onClick={SubmitHandler}>submit</Button>

    </div>
  )
}

export default Statebasics