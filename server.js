var express = require('express');
var app = express();

var port = 3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server started at' + port);

app.post('/api/login',function(req,res) {
    var result = [{
        title:"java",
        learner: "Asish",
        level: "Beginner"
    },{
        title:"C",
        learner: "Asish",
        level: "Beginner" 
    },{
        title:"C++",
        learner: "Asish",
        level: "Beginner"
    },{
        title:"CSS",
        learner: "Asish",
        level: "Beginner"
    }];

    res.json(result);
})
