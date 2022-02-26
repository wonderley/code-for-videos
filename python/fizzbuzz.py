for n in range(1, 101):
    is_multiple_of_three = n % 3 == 0
    is_multiple_of_five = n % 5 == 0
    if is_multiple_of_three and is_multiple_of_five:
        print('fizzbuzz')
    elif is_multiple_of_three:
        print('fizz')
    elif is_multiple_of_five:
        print('buzz')
    else:
        print(n)



        