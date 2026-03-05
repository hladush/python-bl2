# # Cycles (Loops) in Python
# # There are two main types of loops in Python: for and while

# # 1. FOR LOOP - iterates over a sequence
# for i in range(5):
#     print(i)  # prints 0, 1, 2, 3, 4

# # Iterating over a list
# fruits = ["apple", "banana", "cherry"]
# for fruit in fruits:
#     print(fruit)

# # 2. WHILE LOOP - repeats while condition is True
# count = 0
# while count < 5:
#     print(count)
#     count += 1

# # LOOP CONTROL STATEMENTS:
# # break - exits the loop
# for i in range(10):
#     if i == 5:
#         break  # stops when i equals 5

# # continue - skips current iteration
# for i in range(10):
#     if i % 2 == 0:
#         continue  # skips even numbers
#     print(i)

# # pass - does nothing, placeholder
# for i in range(5):
#     pass  # empty loop body

# # NESTED LOOPS
# for i in range(3):
#     for j in range(3):
#         print(f"i={i}, j={j}")

# # else clause in loops - executes when loop finishes normally
# for i in range(5):
#     print(i)
# else:
#     print("Loop completed!")


# Pattern 1: decreasing stars
for i in range(3, 0, -1):
    print("*" * i)

print()

# Pattern 2: right-aligned decreasing stars
for i in range(3, 0, -1):
    print(" " * (3 - i) + "*" * i)

print()

# Pattern 3: increasing stars
for i in range(1, 4):
    print("*" * i)

print()

# Pattern 4: right-aligned increasing stars
for i in range(1, 4):
    print(" " * (3 - i) + "*" * i)