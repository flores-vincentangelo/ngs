const templateGenerator = require('./4-function');

const myTemplate = templateGenerator('Hello Node!');

console.log(myTemplate);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8"/>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
//   <title>Hello Node!</title>
// </head>
// <body>

// </body>
// </html>