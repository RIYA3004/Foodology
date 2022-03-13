const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
//which templating engine should be used that we need to consider
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs'); //template engine named ejs specifically that can be usec


// views and view engine are reserved names that one can use for the understanding and the consideration that we have 

app.use(express.static('public')); // here we can give any name of folder 
app.use(express.urlencoded({extended:false})); // we use the URL encoder to have the proper dealing with the data files that we have.
app.get('/',function(req,res){
   res.render('index');
});
app.get('/restaurants',function(req,res){
    // const htmlfilepath = path.join(__dirname,'views','restaurants.html');
    // res.sendFile(htmlfilepath);
    const filePath = path.join(__dirname, 'data', 'restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    // here we can pass the number of the arguments that we are considering that we have 
    // here we have the render method where we have the restaurants file that can be rendered and can have the other arguments we can pass into it as a key value pair that we have 
    res.render('restaurants' , {numberOfResaurants:storedRestaurants.length,restaurants : storedRestaurants});
});
app.get('/recommend',function(req,res){
    res.render('recommend');
});

app.post('/recommend', function(req,res){
    const restaurant = req.body;
    // for storing the response that we have 
    const filePath = path.join(__dirname, 'data', 'restaurants.json');
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    storedRestaurants.push(restaurant);
    fs.writeFileSync(filePath,JSON.stringify(storedRestaurants));// here we can have the 
    res.redirect('/confirm'); //we can redirect ourselves that we can consider for it 

});
app.get('/confirm',function(req,res){
    res.render('confirm');
});
app.get('/about',function(req,res){
    // const htmlfilepath = path.join(__dirname,'views','about.html');
    // res.sendFile(htmlfilepath);
    res.render('about');
});
app.listen(4000);
























// const fs = require('fs');
// const path = require('path');
// const express = require('express');
// // express returns a function 
// const app = express(); // here we have the function that we are having that we are having

// //when we are having the form and want to hve access to it we use the urlencoded for it 
// app.use(express.urlencoded({extended:false}));

// //current time
// app.get('/currenttime',function(req,res){
//     res.send('<h1>'+ new Date().toISOString()+'</h1>');
// });
// // normal / working
// app.get('/',function(req,res){
//     res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
// });
// app.post('/store-user', function(req,res){
//     const nm = req.body.username;
//     const filePath = path.join(__dirname, 'data', 'users.json');
//     const fileData = fs.readFileSync(filePath);
//     const existinguser = JSON.parse(fileData);
//     existinguser.push(username);
//     fs.writeFileSync(filePath, JSON.stringify(existinguser));
//     res.send('<h2>Usernamestored</h2>')
// });
// app.listen(4000)

// // now what we can do is as follows the server can be created as follows 























//return object that we can return
/*function handleRequest(request,response)
{
// when the link is hit this function should be executed
//again this is very similar to flask
if(request.url ==='/currenttime')
{
    response.statusCode = 200;
    response.end('<h1>'+ new Date().toISOString() +'</h1>'); // which means we can send the HTML sent to the file requests that we have.
}
else
{
    response.statusCode = 200;
    response.end('<h1>Hello World</h1>'); // which means we can send the HTML sent to the file requests that we have.
}

}
const serve = http.createServer(handleRequest) // to handle the request when we have the createServer at that time we will have the function we want to execute when running the code
// whenever we type a website like amazon.com the it also adds a port there normally 80 or 443(secure)
// but in normal cases we will have to specicify where the server wants to listen for the given address
serve.listen(4000);

// for express u should have a particular */