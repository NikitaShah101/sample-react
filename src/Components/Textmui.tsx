'use client'
import { ChangeEvent, useEffect, useState } from 'react';
import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  value: string;
  onInputChage: (value: string) => void
}

export default function ButtonUsage({ value, onInputChage }: Props) {
  const [message, setMessage] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    onInputChage(event.target.value as string)
  };

  useEffect(() => {
    setMessage(value)
  }, [value])


  return (<TextField id="setName" label="Filled" variant="filled" onChange={handleChange} value={message} />


  );
}
