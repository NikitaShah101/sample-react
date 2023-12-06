'use client';
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';

const ClockDate = () => {

    const [date, setDate] = useState(new Date());


    return (
        <Box>
            {date}
        </Box>
    )
}

export default ClockDate
