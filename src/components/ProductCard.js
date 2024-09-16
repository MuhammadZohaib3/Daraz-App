import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import '../index.css';
import CardContext from '../context/card';
import { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function MediaCard({product, viewDetail}) {
  const { card, setCard } = useContext(CardContext);
  const [open, setOpen] = React.useState(false);

  const addToCard = () => {
    const cardData = JSON.parse(localStorage.getItem('card')) || [];
    const index = cardData.findIndex(v => v.id === product.id)
    if(index !== -1) {
      cardData.splice(index, 1,{...cardData[index], qty:
      cardData[index].qty + 1});  
      }else {  
       cardData.push({...product, qty:1})
      }
    localStorage.setItem('card',JSON.stringify(cardData))
    setCard(cardData)
    setOpen(true)
  }
  return (
    <Card sx={{ width: 250,marginTop:4, position:"relative",paddingBottom:5}}>
    <div>
        <img style={{width:"100%",height:240, objectFit:"contain"}}
        src={product.image}
       alt=''/>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Product Card in Added
        </Alert>
      </Snackbar>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Rs {product.price}
        </Typography>
        <Typography variant="body2"
         style={{fontWeight:"bold"}}>
        {product.title.slice(0,28)}...
        </Typography>
        <Rating style={{paddingTop: 6}} name="size-small" value={product.rating.rate} size="small" />
      </CardContent>
    <CardActions className='card-btns'>
     <Button onClick={addToCard} size="small">ADD TO CARD
     </Button>
     <Button onClick={() => viewDetail(product.id)} className="view" size="small">VIEW DETAILS
     </Button>
     </CardActions>
    </Card>
  );
}