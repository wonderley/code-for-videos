from english_words import english_words_lower_alpha_set
import random

def get_five_letter_words(words):
    five_letter_words = set()
    for word in words:
        if len(word) == 5:
            five_letter_words.add(word)
    return five_letter_words

def prompt_for_guess(valid_words):
    while True:
        guess = input()
        if len(guess) != 5:
            print('Please guess a five-letter word.')
        elif guess not in valid_words:
            print(f'{guess} is not a valid word.')
        else:
            return guess


words = get_five_letter_words(english_words_lower_alpha_set)

secret_word = random.choice(list(words))

print('~~WORDLE~~')
print('Guess a five letter word.')
print(f'The word is {secret_word}')
n_guesses = 6
guessed_word = False
for i in range(n_guesses): 
    guess = prompt_for_guess(words)
    if guess == secret_word:
        guessed_word = True
        break
    print(f"The word's not {guess}.")
    print(f'You have {n_guesses-1-i} guesses left')
if guessed_word:
    print(f'You got it in {i+1} turns! 🏆')
else:
    print("Sorry, you didn't guess the word!")