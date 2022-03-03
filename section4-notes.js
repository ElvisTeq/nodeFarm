// #1
// Node, V8, Libuv and C++

// Node => relies in V8, Libuv

// V8 => converts JS code into machine code that our computer can understand
// => written in C++

// Libuv => Open source library, gives sources to the underlying computer operating system file system, networking, and more
// => has Event Loop & Thread Pool
// => written in C++

// Node => can convert V8, Libuv into JS for us to use

//////////////////////////////////////////////////////////////////////

// #2
// Processes, Threads and the Thread Pool

// Node was written in C++
// Node is run in Single Thread (Sequence of instructions)

// When loading heavy tasks that takes long, Node will automatically offload data in the Thread Pool, so is not blocking our code

//////////////////////////////////////////////////////////////////////

// #3
// The Node.js Event Loop
