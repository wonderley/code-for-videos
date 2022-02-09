import time

n_seconds = 5
start = time.time()
now = time.time()
n_iterations = 0
while now - start < n_seconds:
    now = time.time()
    n_iterations += 1
print(f"it's been {n_seconds} seconds!")
print(f'the loop ran {n_iterations} times.')