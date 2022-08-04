import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import './prepdialog.css'

export default function PrepDialog() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [number, setNumber] = React.useState();
  const [text, setText] = React.useState();
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  let count = 0;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if(!email || !number || !text){
      setError(true);
     
    } else {
      axios.post('https://relaxhotel.herokuapp.com/api/dinning', {
      email,
      number,
      text
    },
       )
    setEmail('');
    setNumber('');
    setText('');
    setError(false)
    setSuccess(true)
    window.refresh();
    }
      };

  const handleCancel = () =>{
       setOpen(false);
  }

  return (
    <div>
      <button className='bg-orange-500 py-2 px-4 rounded-md text-white mt-5 d-button' onClick={handleClickOpen}>
        Request for Preparation
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
     
        <DialogContent>
          <DialogContentText>
            The following fields are important. Please fill them and click send then we'll reach back to as early as possible.  Once the order is recieved, we will send you an invoice for payment purposes.<br></br> <b>Note: Preparation will start after payment has been done</b>
          </DialogContentText>
          <TextField
          value={email}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />

               <TextField
            autoFocus
            value={number}
            margin="dense"
            id="name"
            label="Phone Number"
            type="number"
            fullWidth
            onChange={(e) => setNumber(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            value={text}
            id="name"
            label="Type something"
            type="text"
            fullWidth
            onChange={(e)=>setText(e.target.value)}
          />
          { error && 
           <Alert variant="filled" severity="warning">
        All the fields must be field! Please try again
      </Alert>
          }
        {success && 
        <Alert variant="filled" severity="success">
        Your order has been recieve. We will get back to you ASAP
      </Alert>
        }
      
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
           Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}