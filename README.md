This repository contains a photo gallery application and two javascript challenge, contributions are welcomed!

Subarray sum
-----------------
problem: Given an array of integers and a target sum, determine if there exists a contiguous
subarray within the array that sums up to the target. Return true if such a subarray exists,
otherwise return false.

explanations of the approach I took: by using the two pointers method.
The idea is to maintain pointers that point to the first and last value of a subarray.
On each turn, the left pointer moves one step to the right, and the right pointer
moves to the right as long as the resulting subarray sum is at most x. If the sum
becomes exactly x, a solution has been found

How run Subarray sum algorthim:
1. First install node.js
2. create a javascript file with any "name", they normaly end with .js
3. through the terminal of your preferred code editor navigate to the directory of your file
4. run the command node followed by the name of your file

