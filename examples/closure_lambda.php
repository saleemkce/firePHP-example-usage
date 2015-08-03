<?php
/**
 * LAMBDA example
 */
// Anonymous function
// assigned to variable
$greeting = function () {
	return "Hello world";
}
 
// Call function
echo $greeting();
// Returns "Hello world"


/**
 * Closure example
 */ 
// Create a user
$user = "Philip Jimmy Anders";
 
// Create a Closure
$greeting = function() use ($user) {
  echo "Hello $user Welcome";
};
 
// Greet the user
$greeting(); // Returns "Hello Philip"



/**
 * Closure with array_walk example
 */ 
// An array of names
$users = array("John", "Mike", "Ashley", "Evans", "Peters", "Jacobs", "May");
 
// Pass the array to array_walk
array_walk($users, function ($name) {
  echo "Hello $name<br>";
});
// Returns
// -> Hello John
// -> Hello Jane
// -> ..

