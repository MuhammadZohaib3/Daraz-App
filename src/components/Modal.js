import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MediaControlCard from './MediaControlCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  border : '2px solid  #3457D5 ',
  borderRadius:2

};

export default function BasicModal({detail, handleClose, open}) {
   
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <MediaControlCard detail={detail} />
        </Box>
      </Modal>
    </div>
  );
}