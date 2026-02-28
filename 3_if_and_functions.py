"""
Control Flow and Functions in Python
=====================================

IF Statements
-------------
If statements are used to execute a block of code based on a condition.

Syntax:
    if condition:
        # code block
    elif another_condition:
        # code block
    else:
        # code block

Example:
    x = 10
    if x > 0:
        print("Positive")
    elif x < 0:
        print("Negative")
    else:
        print("Zero")

Functions
---------
Functions are reusable blocks of code that perform a specific task.

Syntax:
    def function_name(parameters):
        '''Function docstring'''
        # code block
        return value

Example:
    def add(a, b):
        '''
        Adds two numbers together.
        
        Args:
            a (int/float): First number
            b (int/float): Second number
            
        Returns:
            int/float: Sum of a and b
        '''
        return a + b

    result = add(3, 5)  # result = 8

Notes:
    - Functions can have default parameter values: def func(x, y=10)
    - Functions can return multiple values: return x, y
    - Functions can accept variable arguments: def func(*args, **kwargs)
    - If statements can be nested inside functions and vice versa
    - A function without a return statement returns None by default
"""

# =============================================================================
# IF STATEMENT TASKS
# =============================================================================

# Task 1: Grade Checker
# Write an if/elif/else statement that prints the letter grade based on a score.
# Score >= 90: "A", >= 80: "B", >= 70: "C", >= 60: "D", else: "F"
score = 85
# YOUR CODE HERE


# Task 2: Even or Odd
# Write an if/else statement that prints whether a number is "Even" or "Odd"
number = 42
# YOUR CODE HERE


# Task 3: FizzBuzz
# Write an if/elif/else statement that:
# - prints "FizzBuzz" if the number is divisible by both 3 and 5
# - prints "Fizz" if divisible by 3
# - prints "Buzz" if divisible by 5
# - otherwise prints the number itself
num = 15
# YOUR CODE HERE


# =============================================================================
# FUNCTIONS TASKS
# =============================================================================

# Task 4: Temperature Converter
# Write a function called celsius_to_fahrenheit(celsius) that converts
# Celsius to Fahrenheit. Formula: (celsius * 9/5) + 32
# YOUR CODE HERE


# Task 5: Min/Max Finder
# Write a function called find_min_max(a, b, c) that takes three numbers
# and returns both the minimum and maximum values.
# Example: find_min_max(3, 1, 4) should return (1, 4)
# YOUR CODE HERE


# Task 6: Greeting Function with Default Parameter
# Write a function called greet(name, greeting="Hello") that prints
# a greeting message. If no greeting is provided, use "Hello".
# Example: greet("Alice") -> "Hello, Alice!"
# Example: greet("Bob", "Hi") -> "Hi, Bob!"
# YOUR CODE HERE


# Task 7: Calculator
# Write a function called calculate(a, b, operation="add") that performs
# basic math operations: "add", "subtract", "multiply", "divide".
# Handle division by zero by returning None and printing a warning.
# Example: calculate(10, 2, "divide") -> 5.0
# YOUR CODE HERE