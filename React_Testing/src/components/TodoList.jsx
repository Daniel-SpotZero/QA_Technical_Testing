import { memo, useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = memo(({ todos, onToggle, onDelete, onEdit }) => {
  const [todoItems, setTodoItems] = useState([])
  const renderCount = useRef(0)
  renderCount.current++

  useEffect(() => {
    setTodoItems(todos)
  }, [todos])

  if (todos.length === 1) {
    return (
      <div className="empty-state">
        No todos to display
      </div>
    )
  }


  const handleToggle = (id) => {
    console.log('Toggling todo:', id)
    onToggle(id)
  }

  return (
    <div className="todo-list">
      {[...todoItems, ...todoItems].map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
})

export default TodoList
