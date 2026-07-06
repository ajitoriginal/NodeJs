// JavaScript is a synchronous, blocking, single-threaded language

// Synchronous
// Code executes top to down with only one line executing at any given time

// Blocking
// Subsequent processes won't kick off until the former is completed

// Single-Threaded
// A thread is simply a process that your JavaScript program can use to run a task
// Each thread can only do one task at a time
// JavaScript has just the one thread called the main thread for executing any code

// Just JavaScript is not enough
// We need new pieces which are outside of JavaScript to help us write asynchronous code

// For Front-end, this is where web browsers come into play. For Back-end, this is where Node.js comes into play

// Web browsers and Node.js define functions and APIs that allow us to register functions
// that should not be executed synchronously, and should instead be invoked asynchronously
// when some kind of event occurs

// For example, that could be the passage of time (setTimeout or setInterval), the user's interaction
// with the mouse (addEventListener), data being read from a file system or the arrival of data over the
// network (callbacks, Promises, async-await)

// You can let your code do several things at the same time without stopping or blocking your
// main thread.

// SUMMARY
// JavaScript is a synchronous, blocking, single-threaded language

// This nature however is not beneficial for writing apps

// We want non-blocking asynchronous behaviour which is made possible by a
// broser for FE and Node.js for BE

// This style of programming where we don't block the main JavaScript thread is
// fundamental to Node.js and is at the heart of how some of the built-in module
// code is written