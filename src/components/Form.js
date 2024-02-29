import React, { useState } from 'react'
import { TextField, Paper, Box, Typography} from '@mui/material';
import AlertButton from './/../components/GButton';


const initialFValues = {

  id: 0,
  fullName: '',
  email: '',
  adress: '',
  comments: '',
};

const ContactForm = () => {

  const [values, setValues] = useState(initialFValues);
  const handleInputChange = e => {
    const { name, value} = e.target
    setValues({
      ...values,
      [name]:value
    })
  };

  return (
    <Box noValidate autoComplete="off" component="form">
      <Typography variant="h3" margin={5}>Contact Us</Typography>
        <Paper sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { width: '80%', margin: 1 },}}>  
          <TextField label='Full Name' variant='outlined' type='' name='fullName' value={values.fullName} onChange={handleInputChange}></TextField>
          <TextField label='Email' variant='outlined' name='email' value={values.email} onChange={handleInputChange}></TextField>
          <TextField label='Adress' variant='outlined' name='adress' value={values.adress} onChange={handleInputChange}></TextField>
          <TextField label='Comments' variant='outlined' name='comments' value={values.comments} onChange={handleInputChange}></TextField>
          <AlertButton />
        </Paper>
    </Box>
    
  )
}

export default ContactForm;