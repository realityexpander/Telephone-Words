# Telephone-Words

Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg<br>
<br>
Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!<br>
<br>
Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).<br>
<br>
Examples<br>
Input	Output<br>
digitString:<br>
"0002"	[ "000A", "000B", "000C" ]<br>
digitString:<br>
"1123"	[ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]<br>
