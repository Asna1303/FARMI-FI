import React from 'react'
import Button from '@mui/material/Button';

const lotdetails = () => {
  return (
    <div>
        <Button variant="contained" sx={{backgroundColor:"#F7C35F",borderradius:"5",height:"24px",width:"148px",color:"black" ,'&:hover': {
            backgroundColor: "#F7C35F", backgroundSize: 'cover',
            backgroundPosition: 'center top -10 px',  // Set the same background color as the normal state
          },}}>Lot Details</Button>
    
    </div>
  )
}

export default lotdetails