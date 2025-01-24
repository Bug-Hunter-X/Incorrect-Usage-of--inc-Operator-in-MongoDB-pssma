# Incorrect Usage of $inc Operator in MongoDB

This repository demonstrates an example of an uncommon error in MongoDB related to the $inc operator.  The error occurs when attempting to increment a field using a string value instead of a numeric value.

## Bug
The provided `bug.js` file contains code showing the incorrect use of the `$inc` operator.  The code attempts to increment a field with a string, resulting in an error.

## Solution
The `bugSolution.js` file shows the correct usage of `$inc`, incrementing the field with a numeric value. The solution also provides error handling for the case where a document is not found. 

This example highlights a subtle error that can lead to unexpected behaviour in your MongoDB application. Always ensure that the value passed to the $inc operator is a number.