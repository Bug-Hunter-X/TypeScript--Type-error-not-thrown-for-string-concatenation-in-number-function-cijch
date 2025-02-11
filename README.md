# TypeScript Type Error Not Thrown for String Concatenation in Number Function

This repository demonstrates a scenario where TypeScript does not throw a type error when a string is passed to a function expecting a number. Instead of throwing an error, TypeScript performs string concatenation.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, when a string is passed as an argument, TypeScript does not throw an error. It performs string concatenation resulting in unexpected behavior.

## Solution

The solution involves adding stricter type checking to ensure that the function only accepts numbers as input. This can be done using type guards or by improving the parameter type checking.