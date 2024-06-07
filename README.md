This repository contains a photo gallery application and two javascript challenge, contributions are welcomed!

Photo Gallery application
--------------------------
To Implement an interactive photo gallery, I used provided Figma
designs as my starting point, I started with HTML Boilerplate, then include my section tag in the body tag, with flex box I displayed my elements as columns to meet the required design. no css framework or javascript utilized.

How to work run this application:
1. Online: navigate to this website ()
2. Locally: clone this repository, through your terminal nagivagte to the cloned directory then to Photo Gallery, open index.html, right click and select show preview, you can simply double click on index.html outside you terminal to interact with the gallery!



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

