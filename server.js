const express = require ('express'),
      app = express(),
      port = process.env.PORT || 3000;

module.exports = app;

require('./controllers/config')(app)

// people routes will return json data
app.use(require('./controllers/ /////////////route-name-here'));

app.use(require('./controllers/routes'));

// generate port, set default to 3000 on localhost
app.listen(port, function(){
  // console.log(`Server is alive on ${port}!`)
})
Contact GitHub API Training Shop Blog About
