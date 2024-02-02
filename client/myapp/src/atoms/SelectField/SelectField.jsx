import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectField = () => {
  return (
    <div>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">select a lot</InputLabel>
        <Select
        sx={{backgroundColor:"#F7C35F",borderradius:"5",height:"57px",width:"487px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default SelectField