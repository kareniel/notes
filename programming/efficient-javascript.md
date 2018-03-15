# tips on writing efficient javascript

- every parameter should have one and only one type, and return type should always be the same.
- never use the same var to hold differently typed values
- give a (possibly default) value having the right type as soon as you declare them
- do not add properties on the fly on any object. have the habit, 
  when adding a property at some point in your code, to add it also in the constructor.
  In the same manner, never delete a property
- create a default instance of the class that you’ll use only for initialization/’declaration’ purposes 
- choose a cheap type for your vars / properties
- useful metric: kb of garbage per second saved
- Use a cheap Collection type 
  - `Typed Array > Array > Map > Object > Whatever data structure ( tree… )`
- pre-allocate arrays if you know they’re gonna be big.
- whenever it makes sense, create an array by using slice() on an existing array, then replacing values : this way you allocate only once and the engine is aware of the type.
- do not use mixed type arrays
- do not keep undefined values (in an array): they will only raise your chances of a slower processing.
- use __ as a prefix for the name of (reusable) optimisation variables
- argument count affects memory
- every time you write an indirection (something.someProp) for the second time, create a var and re-use it


notes from [gamealchemist](https://gamealchemist.wordpress.com/2016/04/15/writing-efficient-javascript-a-few-tips)
