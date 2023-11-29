//import Image from 'next/image'
'use client'
import styles from './page.module.css';
import Buttonmui from '../Components/Buttonmui'
import Textmui from '../Components/Textmui'
import { useState } from 'react';
import Searchbox from '@/Components/molecules/Searchbox';





export default function Home() {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (value: string) => {
    setValue(value)
  }

  const handleButtonClick = (data: string) => {
    if (data === 'submit') {
      console.log('Button', data)
      console.log(value)
    }
    if (data === 'clear') {
      console.log('Button', data)
      handleInputChange("");
      console.log('value', value);
    }
  }

  

  return (
    <main className={styles.main}>

      <form>
        <Textmui value={value} onInputChage={(e) => handleInputChange(e)} />
        <Buttonmui lable='submit' onButtonClick={(data) => handleButtonClick(data)} />
        <Buttonmui lable='clear' onButtonClick={(data) => handleButtonClick(data)} />
      </form>
     <Searchbox/>
     

    </main>
  );
}
