import React from 'react'

import Button from '@mui/material/Button';

const discover = () => {
  return (
    <div>
       
      <Button variant="contained" sx={{backgroundColor:"#F7C35F",borderradius:"5",height:"72px",width:"181px",color:"black" ,'&:hover': {
            backgroundColor: "#F7C35F", // Set the same background color as the normal state
          },}}>Discover More</Button>
    

    </div>
  )
}

export default discover