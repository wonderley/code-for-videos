# returns a list that represents the color for each position
NONE = 0
GREEN = 1
YELLOW = 2
def find_position_matches(target, guess):
    matched_target_indexes = set()
    position_colors = [NONE] * len(target)
    for i, l in enumerate(guess):
        if target[i] == l:
            position_colors[i] = GREEN
            matched_target_indexes.add(i)
    for gi, gl in enumerate(guess):
        for ti, tl in enumerate(target):
            if gi == ti or ti in matched_target_indexes:
                # Don't color letters yellow if 
                # the target is already green
                # in its own position
                continue
            elif gl == tl:
                position_colors[gi] = YELLOW
                break
    return position_colors

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
