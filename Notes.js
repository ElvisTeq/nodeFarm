///////////////////////////////////////////////////////////////////

// #1
// => Running JS Outside the Browser

// ---------------------------------- node
// => tu run node in the command

// ---------------------------------- .exit
// => exit node

// ---------------------------------- ctrl + d
// => clear command

// ---------------------------------- ctrl + c
// => to exit program

// ---------------------------------- tab + tab
// => to show all de global variables in the code

// ---------------------------------- "_"
// => previous result
// ex => 2+2 = 4
// _+2 = 6

// ---------------------------------- String. + "tab"
// => shows all string methods
// ctrl + d => to exit

///////////////////////////////////////////////////////////////////

// #2
// => Using Modules 1: Code Modules

// index.js => created

// ------------------------------------ node index.js
// => to run file with node
// index.js => file name

// ------------------------------------ require('fs');
// => const fs = require('fs')
// => build in module that contains methods

///////////////////////////////////////////////////////////////////

// #3
// => Reading and Writting Files

// ------------------------------------ fs.readFileSync('./txt/input.txt', 'uft-8')
// => to run a different file in "index.js"
// fs.readFileSync('pathOfTheFile', 'characterInCoding')
// "uft-8" => english

// ------------------------------------ fs.writeFileSync('./txt/input.txt', textOut)
// => to write file, when "node index.js" is called, "textOut" will be called on "location"
// ./txt/input.txt => location
// textOut => content

///////////////////////////////////////////////////////////////////

// #4
// => Blocking and non-Blocking: Asynchronous Nature of Node.js

// => asyn / sync explanation => .9

///////////////////////////////////////////////////////////////////

// #5
// => Reading and Writting Files Asynchronously

// ------------------------------------ fs.readFile("./txt/start.txt", "utf-8", (err, data) => {});
// To read file asynchronously
// data => data on "./txt/start.txt"

// ------------------------------------ fs.writeFile('./txt/input.txt', textOut, "utf-8", err => {}))
// To write file asynchronously
// textOut => content to add to './txt/input.txt'

///////////////////////////////////////////////////////////////////

// #6
// => Creating a Simple Web Server

// ------------------------------------ require('http')
// => build in module with methods
// const http = require('http')

// ------------------------------------ http.createServer((req, res) => {})
// To create server
// const server = http.createServer((req, res) => {})
// req => request of the server, contain methods so that we can handle it
// res => response => what to do with the responde of the server

// ------------------------------------ .listen(8000, '127.0.0.1', () => {})
// server.listen()
// 8000 => port
// 127.0.0.1 => IP
// () => call back function when server starts listening

///////////////////////////////////////////////////////////////////

// #7
// => Routing

// Implementing actions based on different URL

// ------------------------------------ require.('url')
// => module

// ------------------------------------ res.writeHead(404 , {header})
// Logs error on console
// 404 => error
// header => http header = piece of info about the response that we are sending back
// => additional info that we can specify

///////////////////////////////////////////////////////////////////

// #8
// => Building a (very) Simple API

/*

  fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
        // => Converting JSON data into JS 


      res.writeHead(200, { "Content-type": "application/json" });
       // Telling browser we are sending back JSON 

      res.end(data);
       // display result (data)
*/

///////////////////////////////////////////////////////////////////

// #9
// => HTML Templating: Building the templates

// => replacing all we need to display with {%%}

// overwritting "template-product.html"
// => replacing all data with {%%}

// template-card.html => file created
// => pasted 1 random figure from "template-overview.html"

// template-overview.html
// => all figures were replaced with a single {%PRODUCT_CARDS%}
// => so we can manipulate which one to show with "template-card.html"

///////////////////////////////////////////////////////////////////

// #10
// => HTML Templating: Filling the templates

//  replaceTemplate() function created
// => to manipulate all {%%}

// const cardsHtml => created
// => to map over the dataObj and apply the replaceTemplate() for each

// const output => created
// => to replace the {%PRODUCT_CARDS%} for each cardsHtml

///////////////////////////////////////////////////////////////////

// #11
// => Parsing variables from URLs

///////////////////////////////////////////////////////////////////

// #12
// => Using Modules 2: Our own modules

///////////////////////////////////////////////////////////////////

// #13
// => Introduction to NPM and the package.json File

///////////////////////////////////////////////////////////////////

// #14
// => Types of packages and Installs

///////////////////////////////////////////////////////////////////

// #15
// => Using Modules 3: 3rd Party Modules

///////////////////////////////////////////////////////////////////

// #16
// => Package versioning and Updating

///////////////////////////////////////////////////////////////////

// #17
// => Setting up Prettier in VS Code

///////////////////////////////////////////////////////////////////

// #18
// => Recap and Waht's Next
