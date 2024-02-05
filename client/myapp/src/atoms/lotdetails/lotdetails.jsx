import React from 'react'
import Button from '@mui/material/Button';

const lotdetails = () => {
  return (
    <div>
        <Button variant="contained" sx={{backgroundColor:"#F7C35F",borderradius:"5",color:"black" , marginBottom:"20px",'&:hover': {
            backgroundColor: "#F7C35F"
          },}}>Lot Details</Button>
    
    </div>
  )
}

export default lotdetails