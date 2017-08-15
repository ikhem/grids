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

// Check for Sessions
app.use(function(req, res, next){
  console.log("Beginning of middleware: ", req.session);

  // req.session.user.cart = []
  if( !req.session.user ){
    req.session.user = { cart : [] }
  }

  console.log("From middleware req.session:", req.session.user);
  // console.log("session.cart: ", req.session.user.cart);
  // console.log("Console Line 27:", req.session.user)
  next();
})

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
        console.log("Console Line 49 server.js user:", user)
        return done(null, profile) // Go to serialize user when done is invoked
      }).catch( (e) => console.log(e))
    } else {
      // user[0].cart = [];
      console.log("Console Line 54 server.js user: ", user[0]);
      // return done(null, profile);
      return done(null, user[0]);
      // return done(null, user[0]);  Go to serialize user when done is invoked
    }
  }).catch(err => console.log('check failed', err));
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {successRedirect: 'http://localhost:3000/Profile'}));

passport.serializeUser(function(profileToSession, done) {
  // console.log("Profile To Session: ", profileToSession);
  console.log("Passport Serialize User: ", profileToSession);
  done(null, profileToSession); // Puts second argument on session (profile)
});

passport.deserializeUser(function(profileFromSession, done) {
  //obj is value from session
  done(null, profileFromSession);
});

app.get('/me', function(req, res){
  res.send(req.user)
})

// Get user on session

app.get('/api/profile', function(req, res){
  console.log("Console from line 93 server.js req.user:", req.session.user)
  let user = Object.assign(req.user, req.session.user );
  console.log("kart:", user);
  res.status(200).send(user);
  // res.send(req.user)
})

// Sign user out of session

app.get('/api/signout', function(req, res){
  req.logout();
  res.status(200).redirect('http://localhost:3000/');
})

// Add item to cart

app.post('/api/cart', (req, res) =>{
  req.session.user.cart.push(req.body);
  console.log("Console server.js line 116:", req.session.user)
  res.status(200).send(req.session.user);
})

// Remove item from cart

app.delete('/api/cart', (req, res) =>{
  console.log("Delete: ", req.query.id);
  // console.log("req.session.cart: ", req.session.user.cart)
  const { id } = req.query;
  const { cart } = req.session.user;
  console.log("req.session.cart: ", cart)

  let newCart = cart.filter(items => {
    return items.id != id
  })

  console.log("New Cart: ", newCart);

  res.status(200).send(newCart);
})

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on ${port}.`)
});