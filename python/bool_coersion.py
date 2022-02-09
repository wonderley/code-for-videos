values = [0, False, '', None]
for v in values:
    if v:
        print(f'{v} is truthy')
    else:
        print(f'{v} is falsy')