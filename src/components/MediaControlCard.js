import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

export default function MediaControlCard({ detail }) {
  const theme = useTheme();
  console.log(detail);
  return (
    <Card sx={{ display: 'flex' }}>
     <CardMedia
        component="img"
        sx={{ width: 250, objectFit:"contain"}}
        image={detail.image}
        alt=""
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
            {detail.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {detail.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <Rating style={{paddingTop: 6}}
           name="size-small" 
           value={detail.rating.rate}
            size="small" />
          </Typography>
          <div style={{marginTop:10}}>
          <Chip label={detail.category}/>
          </div>
          <Typography component="div" variant="h6">
          Rs {detail.price} /-
          </Typography>
        <div style={{marginTop: 10}}>
        <Button size="small">ADD TO CARD
     </Button>
     <Button  style={{ marginLeft:5 }}  className="view" size="small">BUY NOW
     </Button>
        </div>
        </CardContent>
      </Box>
 
    </Card>
  );
}