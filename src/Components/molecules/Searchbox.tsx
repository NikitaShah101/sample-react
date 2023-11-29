import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useEffect, useState } from 'react';
import React from 'react';
import TextField from '@mui/material/TextField';
import {  IconButton, InputAdornment, InputBase } from '@mui/material';
import './Textfield.scss';


export default function Searchbox() {

  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const search = () => {
    setUpdated(message);
  };
  return (<>

    <InputBase
      className="search"
      type='text'
      placeholder="Search..."
      onChange={handleChange}
      value={message}
      color="success"
      endAdornment={
        <InputAdornment position="end">
          <IconButton sx={{ color: 'white' }} type="submit" aria-label="search" onClick={search} className='buttons'>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />


    <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue={updated}
      variant="filled"
    />







  </>

  );
}








