const express = require ('express'),
      router = express.Router(),
      fetch = require('node-fetch'),
      db = require('../db/db');

router.get("/",function(req,res){
  db.any("SELECT * FROM tweet_collection")
  .then(function(data){
    console.log(data)
    var tweetAggreg= {
      data: data
    }
    res.render('index', tweetAggreg);
  })
})

function apiCall(){
  var groupStorage= [];
  var scoreStorage= [];
  var dateStorage=[];

  fetch('http://watchtower-python.herokuapp.com/api/tweets/', {
    method: 'GET',
    headers: {Accept: 'application/json'}})
  .then(response => {
    if (response.ok) {
      response.json()
      .then(json => {
        var searchTerm = db.many("SELECT group_name FROM protected_class")
           .then(function(res,req){
            for(let prop2 in res){
              groupStorage.push(res[prop2].group_name)
            }
            for(i=0;i<groupStorage.length;i++){
              for(let prop in json){
                if(json[prop].score<0){
                  let tweetText= json[prop].text
                  if(tweetText.indexOf(groupStorage[i])!=-1){
                     // console.log(groupStorage[i] + '   ' + json[prop].text)
                  }
                }
              }
            }
          })
        });
      }
    }
  );
}

setInterval(apiCall,2000)
module.exports = router;
