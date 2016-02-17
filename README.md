# React Starter Kit + Babel + Less
> Very simple React Starter Kit with ES6 (Babel) and less.

Documentation
------------
This starter kit comes with npm scripts, which compiles ES6 code to ES5 via Babel, LESS to CSS and minify the pre-compiled js files into a "bundle.js". It is not very suitable for complex apps since it does not include any router or any meaningful data manipulation architecture like Flux (I highly recommend it).

Tasks
------------
> $ npm run less-compile

> $ npm run compile-jsx

> $ npm run minify

> $ npm run lite

How to run
----------
> $ npm start

What does "npm start" do?
-----------------
Before we need to understand the tasks. Although, they are kinda simple to understand based on the name, it is important to know that all the script tasks were built with watchers so. Any change on the files will generate the new outputs, which will be straightway refreshed on the browser by the lite server. 
Then, "npm start" execute all the task using concurrently to keep the executing in the same terminal. Observing the following script: 
> concurrent "npm run lite" "npm run minify" "npm run compile-jsx" "npm run less-compile"

This command at first time will be executed from the last argument to the first one. Thus, sorted we have:
1. npm run less-compile
2. npm run compile-jsx
3. npm run minify
4. npm run lite
