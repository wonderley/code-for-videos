from sty import fg, bg, ef, rs

NONE = 0
GREEN = 1
YELLOW = 2

def color_word(word, position_colors):
    colored_word = ''
    for i, l in enumerate(word):
        color = position_colors[i]
        colored_letter = l
        if color == GREEN:
            colored_letter = f'{bg.green}{fg.black}{l}'
        elif color == YELLOW:
            colored_letter = f'{bg.yellow}{fg.black}{l}'
        else:
            colored_letter = f'{rs.all}{l}'
        colored_word += colored_letter
    return f'{colored_word}{rs.all}'

if __name__ == '__main__':
    print(color_word('hello', [NONE, NONE, NONE, NONE, NONE]))
    print(color_word('hello', [YELLOW, GREEN, YELLOW, GREEN, YELLOW]))
    print(color_word('hello', [NONE, GREEN, NONE, YELLOW, NONE]))

