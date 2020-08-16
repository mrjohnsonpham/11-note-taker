// npm packages that help bring our app's functionality to life
const express = require('express');


// Initialize express App
const app = express();
var PORT = process.env.PORT || 3050; 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));

// Require routes file
require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);

// Helps let us know that the port is listening
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});