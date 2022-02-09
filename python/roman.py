def roman_to_integer(roman):
  total = 0
  for index, letter in enumerate(roman):
    val = letter_to_number(letter)
    if (
      index != len(roman) - 1 and
      val < letter_to_number(roman[index+1])
    ):
      val = -1 * val
    total += val
  return total

def letter_to_number(letter):
  return {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }[letter] 

print(roman_to_integer('VII'))
print(roman_to_integer('IV'))