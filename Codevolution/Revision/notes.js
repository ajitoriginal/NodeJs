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
*/