const express = require('express');
const app = express();
const port = 8000;


app.listen(port,function(err){
    if(err)
    {
        //Usually use this
        //console.log("There is an error in running server");

        console.log(`Error in running the server : ${err}`)
    }
    console.log(`Server is running on ${port}`);
})