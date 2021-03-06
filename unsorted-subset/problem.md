Given an array, find the smallest subset that needs to be sorted to make the whole array sorted.

ex 1
[1, 2, 5, 2, 5]
       |--|
[1, 2, 2, 5, 5]
 0  1 [2  3]  4
answer: 2, 3

ex 2
[1, 3, 5, 10, 0]
 |------------|
[0, 1, 3, 5, 10]
[0  1  2  3  4]
answer: 0, 4