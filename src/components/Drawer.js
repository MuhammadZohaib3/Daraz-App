import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import AlignItemsList from './CardList';

export default function TemporaryDrawer({ deleteCard , updateQty, cardData, open, setOpen}) {

  return (
    <div>
        <React.Fragment>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
          >
         <Box
          role="presentation"
           >
            <AlignItemsList deleteCard={deleteCard} updateQty={updateQty} cardData={cardData} />
          </Box>
          </Drawer>
        </React.Fragment>
    </div>
  );
}