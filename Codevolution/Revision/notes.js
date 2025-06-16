/*
Node.js is an open-source, cross-platform JavaScript runtime environment.
Open Source: source code is publicly available for sharing and modification.
Cross Platform: Available for Mac, Windows and Linux
JavaScript runtime environment: provides all the necessary components in order to
                                use and run a JavaScript program outside the browser

Why learn Node.js?
--Build end-to-end JavaScript applications
--Many companies migrated from other backend technologies to Node.js
--Full stack development is one of the most sought out skill sets by companies
--Huge community support

Course structure
--Terms and concepts to understand what is Node.js
--Modules (User defined)
--Build-in modules
--Node.js internals
--npm - Node Package Manager
--CLI Tool
--Misc

Prerequisites
--Modern JavaScript
    --JavaScript fundamentals crash course : https://www.youtube.com/watch?v=XIOLqoPHCJ4
    --Advanced JavaScript crash course : https://www.youtube.com/watch?v=R9I85RhI7Cg
    --ES2015 topics : https://www.youtube.com/watch?v=-Z0i100x0mc

ECMAScript Summary
--ECMA-262 is the language specification
--ECMAScript is the language that implements ECMA-262
--JavaScript is basically ECMAScript at its core builds on top of that

JavaScript Engine
--JavaScript code we write cannot be understood by the computer
--A JavaScript engine is a program that converts javascript code that developers write
  into machine code that allows a computer to perform specific tasks
--JavaScript engines are typically developed by web browser vendors
    V8-Google for Chrome, created in 2008
    SpiderMonkey-Mozilla Firefox
    JavaScriptCore-Apple for Safari
    Chakra-Microsoft Edge (The latest version of edge uses V8)

Chrome's V8 Engine & Node.js
--V8 engine is written in C++ by Google sits at the core of Node.js
--By embedding V8 into your own C++ application, you can C++ code that gets
  executed when a user writes JavaScript code
--C++ is great for lower level operations like file handling, database connections and
  network operations
--C++ program can run ECMAScript and additional features that you choose to incorporate
--The C++ program we're talking about is Node.js
--Node.js is lot more than just a C++ program

JavaScript Runtime consists of
    --V8 JavaScript Engine
    --Web/Browser API's like DOM, STORAGE, TIMERS
    --Queues like MICROTASK QUEUE, CALLBACK/TASK QUEUE
    --Event Loop

What can you build with Node.js?
--Traditional Websites
--Backend services like APIs
--Real-time applications
--Streaming services
--CLI tools
--Multiplayer games and a lot more...

Node.js allows you to build complex and powerful applications

Node.js environment consists of
--Dependencies
--C/C++ features
--JS library

Node.js consists of C++ files which form the core features and
JavaScript files which expose common utilitiesand some of the common
C++ features for easier consumption

Browser vs Node.js
--In the browser, most of the time you interact with DOM or other Web Platform APIs
  but you don't have document, window and all other objects in Node.js which are provided
  by the browser.
--In the browser, we don't have all the nice APIs that Node.js provides through its modules.
  For example, the filesystem access functionality.
--With Node.js, you control the environment
--With a browser, you are at the mercy of what the users choose

Modules
--A module is an encapsulated and reusable chunk of code that has its own context.
--in Node.js, each file is treated as a seperate module
--Type of Modules
    Local modules-Modules that we create in our application
    Build-in modules-Modules that Node.js ships with out of the box
    Third party modules-Modules written by other developers that we can use in our application

Local Modules Summary
--In Node.js, each file is a module that is isolated by default
--To load a module into another file, we use the require function
--When index.js is executed, the code in the modules is also executed
--If the file we are requiring is a JavaSctipt file, we can skip specifying the extension
  and node.js will infer it on our behalf

Module Scope Summary
--Each loaded module in Node.js is wrapped with an IIFE that provides private
  scoping of code
--IIFE allows you to repeat variable or function names without any conflicts

ES Modules Summary
--ES Modules is the ECMAScript standard for modules
--It was introduced with ES2015
--Node.js 14 and above support ES Modules
--Instead of module.exports, we use the export keyword
--The export can be default or named
--If it is a default export, we can assign any name while importing
--If it is a named export, the import name must be the same

Built-in Modules
--Modules that Node.js ships with
--Also referred to as core modules
--Import the module before you can use it
--Some common used built-in modules are
  path
  events
  fs
  stream
  http

Path
--The path module provides utilities for working with file and directory paths

Callbacks
  In JavaScript, functions are first class objects
  A function can be passed as an argument to a function
  A function can also be returned as values from other functions

A function who receives a callback function known as Higher Order Function
A function which passed as an argument known as Callback function

Synchronous callbacks
  A callback which is executed immediately is called a synchronous callback

Asynchronous callbacks
  A callback that is often usec to continue or resume code execution after an asynchronous
  operation has completed
  
  Callbacks are used to delay the execution of a function until a particular time or event
  has occurred

  In Node.js have an asynchronous nature to prevent blocking of execution
  Ex: reading data from a file, fetching data from a database or handling a network request

Events Module
--allow us to work with events in Node.js
--An event is an action or an occurence that has happened in our application that we
  can respond to
--Using the events module, we can dispatch our own custom events and respond to those
  custom events in a non-blocking manner

Character Sets and Encoding
  Computers convert character to a number, then convert that number to its binary representation
  It is also called Character Code
  Character codes are defined in Character Sets - Unicode, ASCII
  Character Encoding dictates how to represent a number in character set as binary data (how many bits to use to represent the number)
  e.g.: UTF-8 = states that character should be encoded in bytes (8 bytes)

Streams
  A sequence of data that is being moved from one point to another point over time
  Types of Streams
    Readable streams
    Writeable streams
    Duplex streams like sockets
    Transform streams like file compression

Buffer
  A temporary memory storage area used to hold data while it is being moved from
  one place to another.

Asynchronous JavaScript
  JavaScript is a synchronous, blocking, single-threaded language.
  Node.js makes it possible to use JavaScript asynchronously.

FS Module
  The file system (fs) module allows you to work with the file system on your computer.
*/