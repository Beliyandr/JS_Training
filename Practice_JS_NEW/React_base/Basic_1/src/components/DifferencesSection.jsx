import React, { useState } from 'react'
import { Button } from './Button/Button'
import { different } from '../data';

export default function DifferencesSection() {

  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  let tabContent = null;

  if (contentType) {
    tabContent = <p>{different[contentType]}</p>
  } else {
    tabContent = <p>Тіцяй</p>
  }

  return (
    <section>
      <h3>Чем мы отличаемся</h3>
      <Button  onClick={() => handleClick('way')} isActive={contentType === 'way'} >Подход </Button>
      <Button onClick={() => handleClick('easy')} isActive={contentType === 'easy'}>Отход </Button>
      <Button onClick={() => handleClick('program')} isActive={contentType === 'program'}>Пассив </Button>

      {tabContent}
    </section>

  )
}
