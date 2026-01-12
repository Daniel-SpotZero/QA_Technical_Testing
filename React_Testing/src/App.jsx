import { useState, useEffect, useCallback, useRef } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import TodoFilters from './components/TodoFilters'
import BulkActions from './components/BulkActions'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [autoSaveStatus, setAutoSaveStatus] = useState('saved')
  const [syncStatus, setSyncStatus] = useState('idle')
  const intervalRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('todo')
    if (saved) {
      setTodos(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  })

  useEffect(() => {
    console.log('Setting up auto-sync interval')
    intervalRef.current = setInterval(() => {
      console.log('Auto-sync check:', todos.length, 'todos')
      if (todos.length > 0) {
        syncToServer(todos)
      }
    }, 5000)

    return () => {
      console.log('Cleaning up interval')
      clearInterval(intervalRef.current)
    }
  }, [])

  const syncToServer = async (todoData) => {
    console.log('Starting sync with', todoData.length, 'todos')
    setSyncStatus('syncing')
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Sync completed')
      setSyncStatus('synced')
      setTimeout(() => setSyncStatus('idle'), 2000)
    } catch (error) {
      console.error('Sync failed:', error)
      setSyncStatus('error')
    }
  }

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    }
    console.log('Adding todo:', newTodo.id)
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  const completeAll = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  const filteredTodos = getFilteredTodos()
  const activeCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="sync-status" style={{
        padding: '10px',
        margin: '10px 0',
        backgroundColor: syncStatus === 'error' ? '#ffebee' : syncStatus === 'syncing' ? '#fff9c4' : '#e8f5e9',
        border: `2px solid ${syncStatus === 'error' ? '#ef5350' : syncStatus === 'syncing' ? '#fbc02d' : '#66bb6a'}`,
        borderRadius: '4px',
        fontWeight: 'bold'
      }}>
        🔄 Sync Status: {syncStatus.toUpperCase()}
      </div>
      <AddTodo onAdd={addTodo} />
      <TodoFilters 
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      {todos.length > 2 && (
        <BulkActions
          onCompleteAll={completeAll}
          onClearCompleted={clearCompleted}
          hasCompleted={todos.some(t => t.completed)}
        />
      )}
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      <div className="stats">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </div>
    </div>
  )
}

export default App
