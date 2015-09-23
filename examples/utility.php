<?php
// find vowels in string...
$string = 'How are you buddy? I like you very much. Do you need my assistance?';
$num  = preg_match_all('/[aeiou]/i', $string, $matches); // "/i" for case-insensitive string;
echo "Number of Vowels in given string : ". $num;