import React, { useRef } from 'react'
import './styles.css'

interface Props{
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e);
      //blur shifts focus from element. if this is not here the input field
      //will be selected after submitting with 'enter' and screen will be dark
      inputRef.current?.blur();
      }}>
      <input ref={inputRef}
             type="input"
             value={todo}
             onChange={e => setTodo(e.target.value)}
             placeholder='Enter a task' 
             className='input__box'/>
      <button className='input_submit' type='submit'>Add</button>
    </form>
  )
}

export default InputField
