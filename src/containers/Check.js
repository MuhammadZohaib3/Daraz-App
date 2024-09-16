import React, { useContext } from 'react';
import DrawerAppBar from '../components/Appbar';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import CardContext from '../context/card';
import axios from 'axios';


const useStyles = makeStyles({
 root: {
    '& label': {
      color: 'red',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
    },
  },
});

function Check() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); 
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

const { card } = useContext(CardContext);
 const handler = () => {
  const user = {
  name, 
  phone, 
  email, 
  address
 }
 axios.post("http://localhost:8000/order", {
 user, 
 card
 })
 .then(res => console.log(res))
 .catch(err => console.log(err))
 }

 const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
  padding: theme.spacing(1),
 textAlign: 'center',
  color: theme.palette.text.secondary,
  }));
 return (
    <div>
        < DrawerAppBar />
    <Box sx={{ width: "50%", flexGrow: 1, margin: '0 auto', marginTop:25 }}  >
         <Grid container spacing={2} direction='row'
          justifyContent='center'
          alignItems='center'
          >
        <Grid item xs={12} >
         <h2>Checkout</h2>
        </Grid>
        <Grid item xs={6} >
        <TextField value={name} onChange={(e) => setName(e.target.value)} style={{width:'100%'}} 
        id="outlined-basic" label="Full name" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField value={phone}  onChange={(e) => setPhone(e.target.value)} style={{width:'100%'}} 
        id="outlined-basic" label="Phone" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField value={email}  onChange={(e) => setEmail(e.target.value)} style={{width:'100%'}} 
        id="outlined-basic" label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField value={address}  onChange={(e) => setAddress(e.target.value)} style={{width:'100%'}} 
        id="outlined-basic" label="Address" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
       <Button onClick={handler} style={{width:'100%'}} size="small">ADD TO CARD
       </Button>
        </Grid>
      </Grid>
    </Box>
     </div>
    )
}







   
    
   
export default Check;