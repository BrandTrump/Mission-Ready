const http = require("http");
const server = http.createServer((request, response) => {
  console.log("Request new received at", new Date().toTimeString());
  console.log(request.url, response.statusCode, request.method);
  if (request.url === "/") {
    response.write("Hello World");
    response.end();
  } else if (request.url === "/icecream") {
    response.write("Here's your icecream");
    response.end();
  } else if (request.url === "/api/userList") {
    const userList = [
      { name: "John", age: 36 },
      { name: "Jane", age: 26 },
      { name: "Don", age: 20 },
    ];
    const stringifiedResponse = JSON.stringify(userList);
    response.write(stringifiedResponse);
    response.end();
  } else if (request.url === "/api/greet") {
    response.write("Hello Jad, thanks for visiting this url");
    response.end();
  }
});
server.listen(4000);
