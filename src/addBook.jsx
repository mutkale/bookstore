import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddBook(props) {
  const [open, setOpen] = useState(false);
  const [book, setBooks] = useState({ Title: '', Author: '', Year: '', lsbn: '', Price: '' });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.addBook(book);
    handleClose();
  }

  const inputChanged = (event) => {
    setBooks({ ...book, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Button variant="outlined" color='primary' onClick={handleOpen}>
        Add Book
      </Button>
      <Dialog open={open}>
        <DialogTitle>New book</DialogTitle>
        <DialogContent>
          <TextField
            name="Title"
            variant="standard"
            value={book.Title}
            onChange={inputChanged}
            margin="dense"
            label="Title"
            fullWidth
          />
          <TextField
            name="Author"
            variant="standard"
            value={book.Author}
            onChange={inputChanged}
            margin="dense"
            label="Author"
            fullWidth
          />
          <TextField
            name="isbn"
            variant="standard"
            value={book.isbn}
            onChange={inputChanged}
            margin="dense"
            label="ISBN"
            fullWidth
          /> 
          <TextField
            name="Year"
            variant="standard"
            value={book.Year}
            onChange={inputChanged}
            margin="dense"
            label="Year"
            fullWidth
          />
          <TextField
            name="Price"
            variant="standard"
            value={book.price}
            onChange={inputChanged}
            margin="dense"
            label="Price (€)"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddBook;
