/*
Node.js is an open-source, cross-platform JavaScript runtime environment.
OPEN SOURCE - source code is publicly available for sharing and modification.
CROSS PLATFORM - available on Mac, Windows and Linux.
JAVASCRIPT RUNTIME ENVIRONMENT -provides all the necessary components in order to use and a JavaScript program outside the browser.

JavaScript is basically ECMAScript at its core but builds on top of that.
A JavaScript engine is a program that executes JavaScript code.
In 2008, Google created its own JavaScript engine called V8.
V8 is written in C++ and can be used independently or can embedded into other C++ programs.
That allows you to write your own C++ programs which can do everything that V8 can do and more.
Then your C++ program can run ECMAScript and additional features that you choose to incorporate.
For example, feature that are available in C++ but not available with JavaScript.

JavaScript runtime environment is a combination of V8 engine, Web Browers API's, Queues and Event Loop.

Node.js consists C++ files which form the core features and JavaScript files which expose common utilities
and some of the C++ features(File Handeling, Input Output and Network Operations) for easier consumption.

Node REPL stands for Read, Evaluate, Print and Loop.

In Node.js, each file is a module that is isolated by default.
To load a module into another file, we use the require function.
When index.js is executed, the code in the module is also executed.
if the required file to import is a JavaScript file, we can skip specifying the extension.

Each loaded module in Node.js is wrapped with an IIFE that provides private scoping of code.
IIFE allows to repeat variable of function names without any conflicts.

Modules
    Local Modules : User creates modules inside the applications and use it in different files.
    Built-in Modules : Node.js ships with, also known as core modules, needs to be imported before use.
                        Some common built-in modules are:
                        path : provides utilities to work with files and directory paths.
                        events : allows to work with events
                        fs :
                        stream :
                        http : 
    Third-party Modules

Callbacks
    Synchronous Callbacks : executed immediately
    Asynchronous Callbacks : used to delay the execution of a function until a particular time or event has occurred or
                                after an asynchronous operation has completed.

Character Sets : predefined list of characters represented by numbers. Unicode and ASCII etc.
Character Encoding : dictates how to represent a number in a character set as binary data, how many bits to use to represent the number.
                        For example : UTF-8 states that characters should be encoded in bytes (8 bits)

Streams : a sequence of data that is being moved from one point to another over time.
buffers : a temporary storage area to hold data while it is being moved from one place to another.
Asynchronous JavaScript : JavaScript is a synchronous, blocking, single-threaded language.
                            This nature is not beneficial for writing apps.
                            to make it's behaviour non-blocking and asynchronous, browser make it possible for FE
                            and Node.js make it possible for BE.
                            The style of programming where we don't block the main JavaScript thread is fundamental to Node.js

FS Modlue : The file system (fs) module allows you to work with the file system on your computer.


*/