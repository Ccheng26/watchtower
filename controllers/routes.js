onst express = require ('express'),
      router = express.Router(),
      db = require('../db/db');

// get route for table_here, will render the index file in table_here folder in views
router.get("/",function(req,res){
  // pulls information from database, in this case, getting all the db info from the table table_here
  db.any("SELECT * FROM table_here")
  .then(function(data){
    // insert information into an object, so we can render it with mustache

    res.render('index', somethingHere);
  })
})

// post route for table_here, will add a user
router.post("/", function(req,res){
  // grabs form data from index.html in views
  table_here = req.body;
  // inserts the form data into database
  var insertItem = db.none('INSERT INTO table_here (name, something) VALUES ($1, $2)',
    [table_here.name, table_here.something])
  // after data is inserted, hit the get route
  insertItem.then(function(){
    res.redirect('/')
  })
})

// get route for individual thing, id will bring user to show page for individual thing's info
router.get("/:id",function(req,res){
  // takes the thing's id as a parameter
  id = req.params.id;
  // pulls all information from database, where thing id matches url
  db.one("SELECT * FROM table_here WHERE id = $1",
    [req.params.id])
    .then(function(data){
      var thingId = {'table_here':data};
      res.render('show', thingId)
    })
    .catch(function(){
      // if invalid entry send to error page
      res.render('error')
    })
})


//update db
router.put("/:id", function(req,res){
  thing = req.body;
  id = req.params.id;
  db.none("UPDATE table_here SET something = $1 WHERE id = $2",
    [thing.something, id])
  .then(
      // nesting this in a function so you won't need to hit the reload button to see results
      function(){
        res.redirect('/' + id)
      }
    )
})


module.exports = router;
