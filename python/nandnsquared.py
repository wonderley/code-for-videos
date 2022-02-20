import time

start = time.time()
l = list(range(1000000))
for n in l:
    for n in l:
        pass
print(f'that took {time.time() - start} seconds')