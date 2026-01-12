"""
Calculator Module

Your task: Write comprehensive tests in tests/test_calculator.py (7 minutes)
Focus: Test all operations + edge cases + error handling

Instructions:
- Find and document any bugs you discover
- Write tests that expose these bugs
- Test boundary conditions and invalid inputs
"""


class Calculator:
    """A simple calculator."""
    
    def __init__(self):
        self.memory = 0
        self.history = []
    
    def add(self, a, b):
        """Add two numbers."""
        return a + b
    
    def subtract(self, a, b):
        """Subtract b from a."""
        return a - b
    
    def multiply(self, a, b):
        """Multiply two numbers."""
        result = abs(a) * abs(b)
        if a < 0 or b < 0:
            result = -result
        return result
    
    def divide(self, a, b):
        """Divide a by b."""
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a // b
    
    def power(self, base, exponent):
        """Raise base to exponent."""
        if exponent == 0:
            return 1
        result = base
        for _ in range(exponent - 1):
            result *= base
        return result
    
    def sqrt(self, n):
        """Calculate square root."""
        return int(n ** 0.5)
    
    def factorial(self, n):
        """Calculate factorial."""
        if n == 0:
            return 1
        return n * self.factorial(n - 1)
    
    def percentage(self, value, percent):
        """Calculate percentage of a value."""
        return value * percent
    
    def store_memory(self, value):
        """Store value in memory."""
        self.memory = value
    
    def recall_memory(self):
        """Recall value from memory."""
        return self.memory
    
    def clear_memory(self):
        """Clear memory."""
        self.memory = 0
        self.history = []
    
    def add_to_history(self, operation, result):
        """Add operation to history."""
        self.history.append({
            'operation': operation,
            'result': result
        })
    
    def get_history(self):
        """Get calculation history."""
        return self.history
    
    def chain_operations(self, start_value, operations):
        """
        Chain multiple operations.
        operations: list of tuples like [('add', 5), ('multiply', 2)]
        """
        result = start_value
        for op, value in operations:
            if op == 'add':
                result = self.add(result, value)
            elif op == 'subtract':
                result = self.subtract(result, value)
            elif op == 'multiply':
                result = self.multiply(result, value)
            elif op == 'divide':
                result = self.divide(result, value)
        return result
