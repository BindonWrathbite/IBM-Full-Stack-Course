print('-'*30)

# Exercise 1: Write the code
print("This is my first program")
print('-'*30)

# Exercise 2: Declare, Set a Value, and Print Variables
myint = 200
print(myint)
print('-'*30)

# Exercies 3: Perform Simple Arithmetic Operations
a = 20
c = a * 100
a *= 100 # alternative way to multiply
print(c)
print(a)
print('-'*30)

# Exercise 4: Execute Conditional Statements
myval = 8
if myval > 0:
    print("Positive")
else:
    print("Negative")
print('-'*30)

# Exercise 5: Declare and Print an Array(list) Using a for-loop
myarray = [20,10,44,928,200]
for num in myarray:
    print(num)
print('-'*30)

# Exercise 6: Execute a Break Statement using a For-Loop
shopping_list = ['bread', 'water', 'chips', 'candy', 'soda']
for item in shopping_list:
    print(item)
    if item == 'chips':
        break
print('-'*30)

# Exercise 7: Declare and Print a Variable Using a While-Loop
score = 60
while score < 90:
    print(score)
    score += 5
print('-'*30)

#Exercise 8: Execute a Break Statement using a While-Loop
myval = 45
while myval < 90:
    print(myval)
    if myval > 80:
        break
    myval += 8
print('-'*30)
