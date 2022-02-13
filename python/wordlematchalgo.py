# returns two lists:
# one with correct-position matches
# and another with incorrect-position matches
def find_position_matches(target, guess):
    target_letters = set(target)
    correct_position_matches = []
    incorrect_position_matches = []
    for i, l in enumerate(guess):
        if target[i] == l:
            correct_position_matches.append(i)
        elif l in target_letters:
            incorrect_position_matches.append(i)
    return correct_position_matches, incorrect_position_matches

if __name__ == '__main__':
    print('TARGET', 'GUESS')
    def test_words(target, guess):
        print(f'{target}  {guess} {find_position_matches(target, guess)}')
    test_words('ghost', 'guest')
    test_words('ghost', 'first')
    test_words('ghost', 'quirk')
    test_words('ghost', 'toast')
    test_words('ghost', 'guess')
    test_words('guess', 'ghost')
