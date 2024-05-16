import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
<AppBar>
  <Toolbar>
    <Typography variant="h6">Home</Typography>
    <Typography variant="h2">Login</Typography>
    <Button variant="contained"><Link to='/reg'>ENTER</Link></Button>
    <Button variant="contained"><Link to='/m'>Viewdata</Link></Button>
  </Toolbar>
</AppBar>
      
    </div>
  )
}

export default Navbar