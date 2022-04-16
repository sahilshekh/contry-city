import React, { Component, useEffect } from 'react'
import Box from "@mui/material/Box"
import { TextField } from '@mui/material/TextField'
import {Button} from "@mui/material/Button"
import { Container } from '@mui/material/Container'
import axios from 'axios'
import { maxWidth } from '@mui/system'
import { TableContainer } from '@mui/material'
const Table =()=>{
 const handleSubmitCountry =(event)=>{
     event.preventDefault();
     const payload={
         country:event.target.country.value,
     };
     axios.post("http://localhost:3000/add-country",payload).then((response) => {
         console.log(response)
     })
     .catch((error) =>{console.log(error)})
 }
const handleSubmitStateCity=(event)=>{
    event.preventDefault();
    const payload={
        city:event.target.city.value,
        population:event.target.population.value,
        country:event.target.country.value,
    };
    axios.post("http://localhost:3000/add-city",payLoad).then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
};
 const getCityData=()=>{
     axios.get("http://localhost:3000/add-city").then((response)=>{
         console.log(response.data);
         SVGMetadataElement([...response.data]);
     })
     .catch((error)=>{
         console.log(error);
     })
 }
 useEffect(()=>{
     getCityData();
 },[])

return{
  <>
  <Box sx={{display:flex}}>
<Container component="main" maxWidth="sm">
  <h1>Add Country</h1>
  <Box component="form" onsubmit={handleSubmitCountry}
  noValidate
  sx={{mt:1}}>
      <TextField
      margin="normal"
      required
      fullwidth
      id="country"
      lable="Add Country"
      name="country"
      autoFocus
      />
      <Button
      type="submit"
      fullwidth
      variant="contained"
      sx={{mt:3,mb:2}}
      >
          Add Country
      </Button>
      </Box>
      </Container>

      <Container component="main" maxWidth="xs">
          <h1>ADD City</h1>
          <Box
          component=="form"
          onsubmit={handleSubmitStateCity}
          noValidate
          sx={{mt:1}}
          >
              <textField
              margin="normal"
              required
              fullwidth
              id="city"
              lable="Add City"
              name="City"
              autoFocus
              />
              <textField
              margin="normal"
              required 
              fullwidth 
              id="country"
              lable="Add Country"
               name="country"
              variant="contained"
              autoFocus
             />
             <Button
             type="submit"
             fullwidth
             variant="contained" 
             sx={{mt:3,mb:2}}
             >
                 Add City
             </Button>
      </Box>
      </Container>
      </Box>
      <ShowTable tableData={data}/>
      </>

  }




}

export default Table
