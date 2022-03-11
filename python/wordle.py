from english_words import english_words_lower_alpha_set
import random
import wordlematchalgo

def get_five_letter_words(words):
    five_letter_words = set()
    for word in words:
        if len(word) == 5:
            five_letter_words.add(word)
    return five_letter_words

words = get_five_letter_words(english_words_lower_alpha_set)

secret_word = random.choice(list(words))

print('~~WORDLE~~')
print('Guess a five letter word.')
print(f'The word is {secret_word}')
n_guesses = 6
guessed_word = False
for i in range(n_guesses):
    guess = input()
    if guess == secret_word:
        guessed_word = True
        break
    matches = wordlematchalgo.find_position_matches(secret_word, guess)
    print(matches)
    print(f'You have {n_guesses-1-i} guesses left')
if guessed_word:
    print(f'You got it in {i+1} turns! 🏆')
else:
    print("Sorry, you didn't guess the word!")