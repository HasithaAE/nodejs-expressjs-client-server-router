const express = require('express');

// module to handle get request on localhost:3000 and load the registration form
exports.form = (req, res) =>
{  
    res.sendFile('views/index.html', { root: '.' })
}  

// form data is captured and sent back as a response
exports.formprocess = (req, res) =>
{  
   console.log(req.body);
   res.write('<h1> Registration Successfull :-) </h1>');
   res.write('<p> Name : </h1>'+ req.body.userid);
   res.write('<p> Wish : </h1>'+ req.body.wish);
   res.end();
}  