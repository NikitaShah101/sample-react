
'use client'
import React from 'react';
import Button from '@mui/material/Button';

interface Props {
  lable: string,
  onButtonClick: (value: string) => void
}


export default function BasicButtons({ lable, onButtonClick }: Props) {
  return (
    <Button variant="contained" onClick={() => onButtonClick(lable)}>{lable}</Button>
  );
}
