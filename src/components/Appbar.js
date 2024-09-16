import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSearchParams } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import CardContext from '../context/card';
import { useContext } from 'react';
import TemporaryDrawer from './Drawer';
const drawerWidth = 240;
const navItems = [ "All", "Electronics", "Jewelery", "Men's clothing", "Women's clothing"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { card, setCard } = useContext(CardContext);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem onClick={() => setSearchParams({category: 
            item.toLowerCase()})} key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
   const deleteCard = (id) => {
    const cardData = JSON.parse(localStorage.getItem('card')) || [];
    const index = cardData.findIndex(v => v.id === id)
    cardData.splice(index, 1);
    localStorage.setItem('card',JSON.stringify(cardData));
    setCard(cardData);

   }
  
   const updateQty = (type, id) => {
    const cardData = JSON.parse(localStorage.getItem('card')) || [];
    const index = cardData.findIndex(v => v.id === id)
    if(type === "+") {
    cardData.splice(index, 1,{...cardData[index], qty:
    cardData[index].qty + 1});  
    }else {
      cardData.splice(index, 1,{...cardData[index], qty:
      cardData[index].qty - 1}); 
    }
    localStorage.setItem('card',JSON.stringify(cardData));
    setCard(cardData);
   };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Daraz
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={() => setSearchParams({category: 
                item.toLowerCase()})}  key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box  sx={{ display: { xs: 'none', sm: 'block' } }}>
            <IconButton
            onClick={() => setOpen(true)}
            size="large"
            aria-label="show 17 new notification"
            color="inherit"
            >
            <Badge badgeContent={card.length} color="error">
            <ShoppingCartIcon />
          </Badge>
          </IconButton>
          </Box>
          
          <TemporaryDrawer updateQty={updateQty} deleteCard={deleteCard} cardData={card} open={open} setOpen={setOpen} />
        </Toolbar> 
          </AppBar>
     
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
  );
}

export default DrawerAppBar;