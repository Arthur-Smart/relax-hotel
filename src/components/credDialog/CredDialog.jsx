import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
import './creddialog.css'

export default function CredDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className='bg-orange-500 py-2 px-4 rounded-md text-white mt-5 d-button' onClick={handleClickOpen}>
       Signup | Signin
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
     
        <DialogContent>
          <DialogContentText>
           Sign in below or sign up to immediately access our private rates.
           You'll be making a quaterly deposit of a certain amount of cash to get access to this exclusive offers. <b>Only those who have completed their 1st quater are eligible</b>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />

          <TextField
            autoFocus
            autoComplete='false'
            margin="dense"
            id="name"
            label="Enter password"
            type="password"
            fullWidth
          />
               
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" >
           Sing up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}