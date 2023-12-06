'use client'
import React, { useEffect, useState } from 'react'

const Clock = () => {

    
    const [CurrentTime, setCurrentTime] = useState('');
    const todayDate = new Date();
    useEffect(() => {
        setInterval(() => {
           
            setCurrentTime(todayDate.toLocaleTimeString())

        }, 1000)
    });

    return (
        <div>{CurrentTime} {todayDate.toDateString()}</div>

    )
}

export default Clock