"""
Demo file to showcase Calculator functions
Run this to see the calculator in actionwith python3 main.py
"""

from calculator import Calculator

def main():
    calc = Calculator()
    
    print("=== Basic Operations Demo ===\n")
    
    print(f"add(5, 3): {calc.add(5, 3)}")
    print(f"add('5', 3): ", end="")
    try:
        print(calc.add('5', 3))
    except Exception as e:
        print(f"Error: {e}")
    
    print(f"\nsubtract(10, 4): {calc.subtract(10, 4)}")
    
    print(f"\nmultiply(6, 7): {calc.multiply(6, 7)}")
    print(f"multiply(-5, -5): {calc.multiply(-5, -5)}")
    print(f"multiply(-3, 4): {calc.multiply(-3, 4)}")
    
    print(f"\ndivide(10, 3): {calc.divide(10, 3)}")
    print(f"divide(10, 0): ", end="")
    try:
        print(calc.divide(10, 0))
    except ValueError as e:
        print(f"Error: {e}")
    
    print("\n=== Advanced Operations Demo ===\n")
    
    print(f"power(2, 3): {calc.power(2, 3)}")
    print(f"power(5, 0): {calc.power(5, 0)}")
    print(f"power(2, -2): ", end="")
    try:
        print(calc.power(2, -2))
    except Exception as e:
        print(f"Error: {e}")
    
    print(f"\nsqrt(16): {calc.sqrt(16)}")
    print(f"sqrt(17): {calc.sqrt(17)}")
    print(f"sqrt(-4): ", end="")
    try:
        print(calc.sqrt(-4))
    except Exception as e:
        print(f"Error: {e}")
    
    print(f"\nfactorial(5): {calc.factorial(5)}")
    print(f"factorial(0): {calc.factorial(0)}")
    print(f"factorial(-3): ", end="")
    try:
        print(calc.factorial(-3))
    except Exception as e:
        print(f"Error: {e}")
    
    print(f"\npercentage(200, 15): {calc.percentage(200, 15)}")
    
    print("\n=== Memory Operations Demo ===\n")
    
    calc.store_memory(42)
    print(f"Stored 42 in memory")
    print(f"recall_memory(): {calc.recall_memory()}")
    print(f"recall_memory() again: {calc.recall_memory()}")
    
    calc.clear_memory()
    print(f"After clear_memory(): {calc.recall_memory()}")
    
    print("\n=== History Demo ===\n")
    
    calc.add_to_history("10 + 5", 15)
    calc.add_to_history("20 * 3", 60)
    calc.add_to_history("100 / 4", 25)
    print("History:", calc.get_history())
    
    print("\n=== Chain Operations Demo ===\n")
    
    operations = [
        ('add', 10),
        ('multiply', 2),
        ('subtract', 5),
        ('divide', 3)
    ]
    result = calc.chain_operations(5, operations)
    print(f"Starting with 5, then: +10, *2, -5, /3")
    print(f"Result: {result}")
    
    print("\nInvalid operation: ", end="")
    try:
        calc.chain_operations(10, [('invalid', 5)])
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
