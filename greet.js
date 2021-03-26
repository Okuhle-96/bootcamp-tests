function greet(name)
{ 
  if (typeof(name) === "number") {
    return "numbers not allowed";
  }
  return "Hello, " + name;
}

greet("Andrew");
greet("Karen");

// console.log(greet('Hello, ', 'Andrew'));
// console.log(greet('Hello, ' ,'Karen'));