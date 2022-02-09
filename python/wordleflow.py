print('~~WORDLE~~')
print('Guess a five letter word.')
n_guesses = 6
for i in range(n_guesses):
    guess = input()
    print(f"The word's not {guess}.")
    print(f'You have {n_guesses-1-i} guesses left')
print("Sorry, you didn't guess the word!")