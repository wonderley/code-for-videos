import random
import time

n = None
while n != 7:
    n = random.choice(range(1, 11))
    print(n)
    time.sleep(1)