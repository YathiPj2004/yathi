import { TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
   <TextField id="outlined-basic" label="First name" variant="outlined" /> <br/><br/>
   <TextField id="outlined-basic" label="Lastname" variant="outlined" /> <br/><br/>
   <TextField id="outlined-basic" label="email" variant="outlined" /> <br/><br/>
   <TextField id="outlined-basic" label="Password" variant="outlined" /> <br/><br/>
   <Button varient="constant">Submit</Button>
    </div>
  )
}

export default Register