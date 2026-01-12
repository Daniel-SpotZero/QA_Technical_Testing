import { useState, useEffect } from 'react'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    console.log('TodoItem mounted')
    setEditText(todo.text)
  }, [])
  
  useEffect(() => {
    console.log('Todo text updated:', todo.text)
  }, [todo.text])

  const handleEdit = () => {
    setIsEditing(true)
    setEditText(todo.text)
  }

  const handleSave = async () => {
    console.log('Saving todo:', editText)
    setIsSaving(true)
    
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('Save complete')
    onEdit(todo.id, editText)
    setIsSaving(false)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
          disabled={isSaving}
          aria-label="Edit todo"
        />
        <button onClick={handleSave} disabled={isSaving} className="save-btn">
          {isSaving ? 'Saving...' : 'Save'}
        </button>
        <button onClick={handleCancel} disabled={isSaving} className="cancel-btn">
          Cancel
        </button>
      </div>
    )
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      <span onDoubleClick={handleEdit}>
        {todo.text}
      </span>
      <button onClick={handleEdit} className="edit-btn">Edit</button>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">Delete</button>
    </div>
  )
}

export default TodoItem
