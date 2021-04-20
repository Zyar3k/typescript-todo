import React, {useState, ChangeEvent, FormEvent} from 'react'

interface TodoFormProps{
  addTodo: AddTodo;
}


export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form  className="todo-form">
      <input type="text" value={newTodo} placeholder='Add a todo' className="todo-input"  onChange={handleOnChange} />
      <button type='submit' className="todo-button" onSubmit={handleSubmit}>
        Add a todo
      </button>
    </form>
    )
}