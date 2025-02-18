import React, { use, useState } from 'react'
import { Button } from './Button/Button'

export const FeedbackSection = () => {

  const [name, setName] = useState('');
  const [reason, setReason] = useState('help')

  function handleChangeName(e) {
    setName(e.target.value)
  }

  return (
    <section>
      <h3>
        FeedbackSection


        <form >
          <label htmlFor="name">Ваше имя</label>
          <input type="text" className='control' id='name' value={name} onChange={handleChangeName} />


          <label htmlFor="reason">Причины обращения</label>
          <select id='reason' className='control'>
            <option value="error">Ошибка</option>
            <option value="help">Нужна помощь</option>
            <option value="suggest">Предложения</option>
          </select>

          <Button>Отправить</Button>
        </form>
      </h3>
    </section>
  )
}
