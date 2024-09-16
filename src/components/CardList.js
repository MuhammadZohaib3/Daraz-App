import  React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { MdOutlineDelete } from "react-icons/md";
import Typography from '@mui/material/Typography';
import { AiOutlinePlusSquare, AiOutlineMinusSquare  } from "react-icons/ai";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import Alert from '@mui/material/Alert';

export default function AlignItemsList({ cardData, deleteCard, updateQty }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {cardData.map((v, i) => {
    return (
     <div key={i} >
     <ListItem alignItems="flex-start">
        <ListItemAvatar style={{padding: 5}}>
        <img style={{width:70, height:70, objectFit:'contain'}}
         src={v.image} alt='' />
        </ListItemAvatar>
        <ListItemText
        primary={v.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               Rs {v.price * v.qty}              
               </Typography>
              <Typography style={{disply:"flex"}}>
               {"QTY:"}
               <AiOutlineMinusSquare onClick={() =>v.qty > 1 && updateQty("-", v.id)} size={22} />
               <span style={{marginLeft:5, marginRight:5}}>
               {v.qty}
               </span>
               <AiOutlinePlusSquare onClick={() => updateQty("+",v.id)} size={22} />
               <MdOutlineDelete onClick={() => deleteCard(v.id)} style={{marginLeft: 5, cursor: "pointer"}} size={22} color='red' />
              </Typography>
            </React.Fragment>
          
          }
        />
      </ListItem> 
     
      <Divider variant="inset" component="li" />
       
</div>
 )
})}
   <div>
      <Link to="check">
       <Button style={{width: "100%", marginTop: 20}} 
       size="small">CHECK OUT
     </Button>
     </Link>
     </div> 
</List>
  );
}