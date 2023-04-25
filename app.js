const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 4000;
const app = express();

// Initialization
app.use(cookieParser());

app.use(session({
    secret: "amar",
    saveUninitialized: true,
    resave: true
}));

// User Object
const user = {
    name: "Amar",
    Roll_number: 43,
    Address: "Pune"
};

app.get('/', (req, res) => {
    
    if (req.session.view) {
        req.session.view++;
        
        /*res.send("You visited this page for "
                + req.session.view + " times");*/
       
       res.sendFile(__dirname + "/index.html");
 
    }else {
       // If user visits the site for
       // first time
       req.session.view = 1;
       
       /*res.send("You have visited this page"
        + " for first time ! Welcome....");*/
      res.sendFile(__dirname + "/index.html");
    }

})
app.post("/", (req, res) => {
    res.send("Thank you for subscribing");
  });
app.get('/about-us', (req, res) => {

    res.send("You visited this page for "
    + req.session.view + " times");

})

// Login page
app.get("/login", (req, res) => {
    req.session.user = user;
    req.session.save();
    return res.send("Your are logged in");
});
 
app.get("/user", (req, res) => {
    const sessionuser = req.session.user;
    if(sessionuser){
       res.send(sessionuser);
    }else{
       res.send("Please Login !"); 
    }
});
 
// Logout page
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Your are logged out ");
}); 
// Host
app.listen(PORT, () =>
    console.log(`Server running at ${PORT}`));
console.log("http://localhost:4000");