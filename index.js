// #2
/*
const hello = "Hello World";
console.log(hello);
*/

const fs = require("fs");

// #6
const http = require("http");
const { CLIENT_RENEG_LIMIT } = require("tls");

// #7
const url = require("url");

const replaceTemplate = require("./modules/replaceTemplate");
// importing module

//////////////////////////////////////////////////////////////

// #3

// Blocking, synchronous way

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// // \n => new line

// fs.writeFileSync("./txt/input.txt", textOut);
// console.log("File written!");

//////////////////////////////////////////////////////////////

// #4
// => asyn / sync explanation => .9

//////////////////////////////////////////////////////////////

// #5

// Non-blocking, async way

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error!!");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     // data1 = read-this
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(".txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written!!!");
//         // this is called because we not handling the err, we just console.log
//       });
//     });
//   });
// });

// console.log("Will read file!");

//////////////////////////////////////////////////////////////

// #6
// => Creating a Simple Web Server

// ************** FILE

// ************** SERVER

/*
const server = http.createServer((req, res) => {
  console.log(req.url);
  // request.url => logs url changes, or additions after the main URL
  // ex=> 127.0.0.1:8000"/EverythingElseIsLogged"
  res.end("Hello from the server!");
  // res.end => is executed each time a new request hits the server
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
*/

//////////////////////////////////////////////////////////////

// #7
// => Routing

// #8
// => Building a (very) Simple API

// ********************* We readFileSync so it gets the data before the other codes

// #10 _____________________________________________________
// replaceTemplate() moved to a module

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);

const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

// #8 ______________________________________________________
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
// `${dirname}` => current location = "dir"
const dataObj = JSON.parse(data);
// _________________________________________________________

const server = http.createServer((req, res) => {
  // #11 ___________________________________________________
  const baseURL = `http://${req.headers.host}`;
  const requestURL = new URL(req.url, baseURL);
  // => Object conatining URL data
  // console.log(requestURL);
  const pathName = requestURL.pathname;
  const query = requestURL.searchParams.get("id");
  // .searchParams returns this: URLSearchParams { 'id' => '1' }
  // => ID was inside 'searchParams'
  // ".get('id')"  => to get id number

  /* -------- NOT WORKING ---------
  const { query, pathName } = url.parse(req.url, true);
  // url.parse => takes a URL string, parses it, and returns a URL object
  // => returns a big object containing all the parse data
  // query => URL id
  // pathName => URL name
  */
  // _______________________________________________________

  // #10 OVERVIEW page
  if (pathName === "/" || pathName === "/overview") {
    // '/' => empthy = mainMenu
    // overview => will be main menu too

    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");

    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

    res.end(output);

    // #10 PRODUCT page
  } else if (pathName === "/product") {
    // #11 _________________________________________________
    res.writeHead(200, { "COntent-type": "text/html" });
    const product = dataObj[query];
    const output = replaceTemplate(tempProduct, product);

    res.end(output);
    // _____________________________________________________

    // #10 API
    // #8 ___________________________________________________
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    // Telling browser we are sending back JSON
    res.end(data);
    // ______________________________________________________

    // #10 Not Found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      // Telling browser we sending text/HTML
      "my-own-header": "Hello-world",
      // This is for fun
    });
    // Logs error on console
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});

//////////////////////////////////////////////////////////////

// #9
// => HTML Templating: Building the templates

// notes.js

//////////////////////////////////////////////////////////////

// #10
// => HTML Templating: Filling the templates

// notes.js

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
