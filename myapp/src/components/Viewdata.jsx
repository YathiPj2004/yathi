import React from 'react'

const Viewdata = () => {
    var[user,setUser]=useState([]);
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data)
        setUser(response.data)
    })

  return (
    <div>

<TableContainer></TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>username</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        </TableContainer>


    </div>
  )
}

export default Viewdata
