var friends = require ("../data/friends");

module.exports = function(app) {
  app.get ("/api/friends", function (req, res){
    res.json(friends);
  });

  app.post("/api/friends", function(req, res){
    if (friends.length === ){
      friends.push(req.body);
      res.json(true);
    }
    else{

    }
  });
}

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res){
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});
