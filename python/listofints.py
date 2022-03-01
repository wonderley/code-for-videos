ints_from_input = input('enter some ints! ')
list_of_strings = ints_from_input.split(' ')
list_of_ints = []
for s in list_of_strings:
    list_of_ints.append(int(s))
print(list_of_ints)




