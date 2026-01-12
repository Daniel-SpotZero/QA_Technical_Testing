import { useState, useEffect, useRef } from 'react'

function AddTodo({ onAdd }) {
  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchTimeoutRef = useRef(null)

  useEffect(() => {
    if (input.length > 2) {
      console.log('Fetching suggestions for:', input)
      setIsLoading(true)
      
      const currentInput = input
      fetchTimeoutRef.current = setTimeout(() => {
        fetchSuggestions(currentInput)
      }, 300)
    } else {
      setSuggestions([])
    }
  }, [input])

  const fetchSuggestions = async (searchText) => {
    console.log('Fetching suggestions for:', searchText)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const mockSuggestions = [
        'Buy groceries',
        'Call dentist',
        'Finish project'
      ].filter(s => s.toLowerCase().includes(searchText.toLowerCase()))
      
      setSuggestions(mockSuggestions)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching suggestions:', error)
      setIsLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      console.log('Adding todo:', input)
      onAdd(input)
      setInput('')
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion) => {
    console.log('Suggestion selected:', suggestion)
    setInput(suggestion)
    setSuggestions([])
  }

  return (
    <div className="add-todo-container">
      <form className="add-todo" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="New todo"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Add'}
        </button>
      </form>
      
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AddTodo
