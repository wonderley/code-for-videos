print('Please answer the following prompts.')
name_1 = input("A person's name: ")
name_2 = input("Another person's name: ")
sports_team = input("The name of a sports team: ")
snack_1 = input("Your favorite snack: ")
snack_2 = input("Another snack: ")
adjective_1 = input("An adjective: ")
adjective_2 = input("Another adjective: ")
public_area = input("A public area: ")
emotion = input("An emotion: ")

script = f'''Last week, {name_1}, {name_2} and I went to a baseball game!
We just had to see the {sports_team} play.
I bought {snack_1} and {snack_2} at the concession stand.
I was really hungry so I ate all of it!
I thought it was {adjective_1} when they played
"Take me out to the {public_area}" on the speakers.
The game was really {adjective_2} but in the end, the
{sports_team} won! I was filled with {emotion}!'''

print(script)


