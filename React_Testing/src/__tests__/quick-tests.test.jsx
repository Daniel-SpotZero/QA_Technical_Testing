/**
 * Quick Component Tests - 5 minutes
 * 
 * Write 2-3 tests for ONE component (choose TodoItem or AddTodo)
 * 
 * Tips:
 * - Test basic rendering
 * - Test one user interaction
 * - Keep it simple - just show you can write React tests
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

// Pick ONE component to test:
// import TodoItem from '../components/TodoItem'
// import AddTodo from '../components/AddTodo'

describe('Quick React Tests', () => {
  // TODO: Write 2-3 tests here
  
  // Example for TodoItem:
  // it('renders todo text', () => {
  //   const todo = { id: 1, text: 'Test todo', completed: false };
  //   render(<TodoItem todo={todo} onToggle={vi.fn()} onDelete={vi.fn()} onEdit={vi.fn()} />);
  //   expect(screen.getByText('Test todo')).toBeInTheDocument();
  // });
  
  // Example for AddTodo:
  // it('renders input and button', () => {
  //   render(<AddTodo onAdd={vi.fn()} />);
  //   expect(screen.getByPlaceholderText(/what needs to be done/i)).toBeInTheDocument();
  // });
});
