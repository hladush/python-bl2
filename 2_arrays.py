# =============================================================================
# ARRAYS (Lists) in Python
# =============================================================================
# A list is an ordered, mutable collection that can hold mixed data types.
# Created with square brackets []

my_list = [1, 2, 3, 4, 5]

# Common operations:
# my_list.append(6)     - add to end
# my_list.remove(1)     - remove element
# my_list[0]            - access by index
# my_list[1:3]          - slicing
# len(my_list)          - get length

# LIST TASKS:
# Task 1: Create a list of 5 fruits and print the 3rd fruit.
# Task 2: Add two new fruits to the list and print the updated list.
# Task 3: Remove the first fruit from the list.
# Task 4: Sort the list alphabetically and print it.
# Task 5: Create a list of numbers 1-10 and print only even numbers using a loop.

# =============================================================================
# DICTIONARIES in Python
# =============================================================================
# A dictionary is an unordered, mutable collection of key-value pairs.
# Created with curly braces {} with key: value pairs

my_dict = {"name": "Alice", "age": 25, "city": "New York"}

# Common operations:
# my_dict["name"]           - access by key
# my_dict["email"] = "a@b"  - add new key-value pair
# my_dict.pop("age")        - remove a key
# my_dict.keys()            - get all keys
# my_dict.values()          - get all values

# DICTIONARY TASKS:
# Task 1: Create a dictionary with info about a person (name, age, city, job).
# Task 2: Add a new key "hobby" to the dictionary and print it.
# Task 3: Update the "age" value and print the updated dictionary.
# Task 4: Loop through the dictionary and print all keys and values.
# Task 5: Check if the key "city" exists in the dictionary and print a message.

# =============================================================================
# SETS in Python
# =============================================================================
# A set is an unordered, mutable collection of unique elements.
# Created with curly braces {} or set()

my_set = {1, 2, 3, 4, 5}

# Common operations:
# my_set.add(6)             - add element
# my_set.remove(1)          - remove element
# my_set.union(other)       - combine two sets
# my_set.intersection(other)- common elements
# my_set.difference(other)  - elements in first but not second

# SET TASKS:
# Task 1: Create a set of 5 numbers and try adding a duplicate - observe result.
# Task 2: Add 3 new elements to the set and print it.
# Task 3: Create two sets and find their union and intersection.
# Task 4: Remove an element from the set and print the updated set.
# Task 5: Convert a list with duplicates [1,1,2,2,3,3,4] to a set to remove duplicates.