import React from 'react'
import Button from '@mui/material/Button';

const lotdetails = () => {
  return (
    <div>
        <Button variant="contained" sx={{backgroundColor:"#F7C35F",borderradius:"5",color:"black" ,'&:hover': {
            backgroundColor: "#F7C35F"
          },}}>Lot Details</Button>
    
    </div>
  )
}

export default lotdetails