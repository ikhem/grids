const express = require('express');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./keys');

const app = express();

app.use(bodyParser.json());

//Setup Auth0
app.use(session({
  secret: 'asdlfk;jalskdfj;askdjfj',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//Setup database through massive
massive('postgres://qxcjfjmp:RSfd5jALpVgRaeefqISBrCKgVMl5aHr0@stampy.db.elephantsql.com:5432/qxcjfjmp').then( db => {
  app.set('db', db);
  db.create_tables()
});

passport.use(new Auth0Strategy({
  domain: keys.domain,
  clientID: keys.clientID,
  clientSecret: keys.clientSecret,
  callbackURL: 'http://localhost:3001/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  //Go to db to find and create user
    let db = app.get('db')
    , authId = profile.id
    , email = profile.emails[0].value
    , givenName = profile.name.givenName || "anonymous"
    , familyName = profile.name.familyName || "anonymous"
    , nickname = profile.nickname || "anonymous"
    , picture = profile.picture;

  db.get_user([authId]).then( user => {
    if(!user.length){
      db.create_user([authId, nickname, givenName, familyName, email, picture])
      .then((userCreated) => {
        return done(null, profile) // Go to serialize user when done is invoked
      }).catch( (e) => console.log(e))
    } else {
      // user[0].cart = [];
      console.log("Console from line 47 server.js user:", user);
      return done(null, profile);
      // return done(null, user[0]);  Go to serialize user when done is invoked
    }
  }).catch(err => console.log('check failed', err));
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {successRedirect: 'http://localhost:3000/Profile'}));

passport.serializeUser(function(profileToSession, done) {
  console.log("Profile To Session", profileToSession);
  //Add
  profileToSession.cart = [];
  done(null, profileToSession); // Puts second argument on session (profile)
});

passport.deserializeUser(function(profileFromSession, done) {
  //obj is value from session
  done(null, profileFromSession);
});

app.get('/me', function(req, res){
  res.send(req.user)
})

app.get('/api/profile', function(req, res){
  console.log("Console from line 67 server.js req.user:", req.user)
  res.send(req.user)
})

app.get('/api/signout', function(req, res){
  req.logout();
  res.status(200).redirect('http://localhost:3000/');
})

// app.get('/api/loans', (req, res) =>{
//   const db = req.app.get('db');
// })

// app.post('/api/checkout', (req, res) =>{
//   console.log("Console from line 81 req.body:", req.body);
//   req.user.cart.push(req.body)
//   console.log("Console from line 83 req.user:", req.user);
//   res.status(200).send(req.user.cart)
// })

app.get('/favorites', function(req, res){
  if(!req.user){
    res.send([])
  }

  var id = req.user.id;
  db.getFavorites([id], function(data){

  })
})

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on ${port}.`)
});