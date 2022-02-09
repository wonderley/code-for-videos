from english_words import english_words_lower_alpha_set
import random

def get_five_letter_words(words):
    five_letter_words = set()
    for word in words:
        if len(word) == 5:
            five_letter_words.add(word)
    return five_letter_words

words = get_five_letter_words(english_words_lower_alpha_set)

secret_word_1 = random.choice(list(words))
secret_word_2 = random.choice(list(words))
secret_word_3 = random.choice(list(words))
print(secret_word_1)
print(secret_word_2)
print(secret_word_3)
