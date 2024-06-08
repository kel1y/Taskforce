This repository contains a photo gallery application and two javascript challenge, contributions are welcomed!

Photo Gallery application
--------------------------
To Implement an interactive photo gallery, I used provided Figma
designs as my starting point, I started with HTML Boilerplate, then include my section tag in the body tag, with flex box I displayed my elements as columns to meet the required design. no css framework or javascript utilized.

How to work run this application:
1. Online: navigate to this website (https://strong-pony-4bb58d.netlify.app/)
2. Locally: clone this repository, through your terminal nagivagte to the cloned directory then to Photo Gallery, open index.html, right click and select show preview, you can simply double click on index.html outside you terminal to interact with the gallery!



Subarray sum
-----------------
problem: Given an array of integers and a target sum, determine if there exists a contiguous
subarray within the array that sums up to the target. Return true if such a subarray exists,
otherwise return false.

explanations of the approach I took: I used two pointers method.
The idea is to maintain pointers that point to the first and last value of a subarray.
On each turn, the left pointer moves one step to the right, and the right pointer
moves to the right as long as the resulting subarray sum is at most x. If the sum
becomes exactly x, a solution has been found

How run Subarray sum algorthim:
1. First install node.js
2. create a javascript file with any "name", they normaly end with .js
3. through the terminal of your preferred code editor navigate to the directory of your file
4. run the command node followed by the name of your file



String Transformation
------------------------
problem:  Given a string, transform it based on the following rules:
● If the length of the string is divisible by 3, reverse the entire string.
● If the length of the string is divisible by 5, replace each character with its ASCII code.
● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
both operations in the order specified above.

explanations of the approach I took: by using if and else statements I was able to solve this problem.
To reverse a string I loop backward through it characters while adding one character at a time to an empty string, according to the output requirements The code removes spaces from the string and then attempts to reverse it. When reversing the string, the indices used do not match up with the modified string length so I use the length of new string formed. with ASCII code, I check the equivalent ascii code for a all string characters and add it to the empty string followed by space.

How run string Transformation algorthim:
1. First install node.js
2. create a javascript file with any "name", they normaly end with .js
3. through the terminal of your preferred code editor navigate to the directory of your file
4. run the command node followed by the name of your file


