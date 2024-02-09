// --- INTERFACES ---

// Exercise 1: Basic Interface Creation
// Task: Define an interface named 'Person' that includes the properties 'name' (a string) and 'age' (a number).
// Then, create an object named 'personExample' that satisfies the 'Person' interface.



// Exercise 2: Optional Properties
// Task: Modify the 'Person' interface to make the 'age' property optional, indicating not all persons must have an age specified.
// Create two objects, one with an 'age' property and another without it, to demonstrate how optional properties work.



// Exercise 3: Readonly Properties
// Task: Add a readonly property 'id' (a number) to the 'Person' interface. This simulates a scenario where an ID, once assigned, cannot be changed.
// Attempt to modify the 'id' of a 'Person' object to see TypeScript enforce immutability.



// Exercise 4: Function Types
// Task: Define an interface 'Calculate' that represents a function taking two arguments, both numbers, and returns a number (the result of some operation).
// Implement a function 'add' that matches this interface, adding two numbers together.



// Exercise 5: Extending Interfaces
// Task: Create an interface named 'Employee' that extends the 'Person' interface by adding a new property 'employeeId' (a number).
// Create an object that satisfies the 'Employee' interface to demonstrate inheritance.



// --- GENERICS ---

// Exercise 6: Generic Function
// Task: Write a generic function named 'identity' that takes an argument of type T and returns the same argument of type T.
// This function should work with any data type, demonstrating the use of generics for type safety without losing flexibility.



// Exercise 7: Generic Interface
// Task: Define a generic interface 'ResponseContainer' with a property named 'data' of generic type T.
// Implement this interface with an object where 'data' is a string, showcasing how generics can be applied to interfaces.



// Exercise 8: Generic Class
// Task: Create a generic class 'DataHolder' with a property 'value' of generic type T and methods to get and set this value.
// This demonstrates how generics ensure type safety in classes while allowing flexibility in the types they work with.



// Exercise 9: Generic Constraints
// Task: Write a generic function that takes an argument of generic type T, where T is constrained to types that have a 'length' property.
// The function should return the length of the passed argument, showcasing how to apply constraints to generics.



// --- DECORATORS ---

// Exercise 10: Simple Class Decorator
// Task: Create a decorator named 'sealed' that seals both the constructor and its prototype of a class.
// Apply this decorator to a class and try to extend it to understand how the @sealed decorator prevents extension.



// Exercise 11: Method Decorator
// Task: Write a method decorator 'logMethod' that logs a message each time the decorated method is called.
// This decorator should not alter the method's functionality but simply add logging behavior.



// Exercise 12: Property Decorator
// Task: Create a property decorator 'logProperty' that logs a message whenever a property is set.
// Apply this decorator to a class property to observe the logging behavior on property assignment.



// Exercise 13: Parameter Decorator
// Task: Write a parameter decorator 'logParameter' that logs metadata about the parameter when the method is called.
// This can help in debugging or understanding how methods are used at runtime.



// Exercise 14: Using Decorators
// Task: Combine the use of 'logMethod', 'logProperty', and 'logParameter' decorators in a single class to demonstrate their effects together.
// Observe how decorators can add powerful metadata and behavior augmentation to class properties and methods.



// Exercise 15: Decorator Factory
// Task: Create a decorator factory 'format' that formats the return value of a method. For example, it could format strings to be uppercase or lowercase.
// Apply this decorator to a method and demonstrate how the return value is formatted according to the decorator's functionality.


