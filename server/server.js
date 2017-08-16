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
      return done(null, user[0]);
      // return done(null, profile);  Go to serialize user when done is invoked
    }
  }).catch(err => console.log('check failed', err));
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {successRedirect: 'http://localhost:3000/portfolio'}));

passport.serializeUser(function(profileToSession, done) {
  done(null, profileToSession); // Puts second argument on session (profile)
});

passport.deserializeUser(function(profileFromSession, done) {
  //obj is value from session
  done(null, profileFromSession);
});

app.get('/me', function(req, res){
  res.send(req.user)
})

app.post('/api/populateLoans', function(req, res){
  console.log("req.body popLoans", req.body.loans)

  const db = req.app.get('db');

  // req.body.loans.map(loan => {
  //   db.add_borrower([loan.name, loan.location.country, loan.image.id]).then( bor_id => db.add_loan([bor_id, loan.status, loan.funded_amount, loan.loan_amount, loan.use, loan.sector, loan.posted_date, loan.planned_expiration_date]))
  // })

  req.body.loans.map(loan => {
    db.add_borrower([loan.name, loan.location.country, loan.image.id])
  })

  res.status(200).send(req.body)
})

// Get user on session

app.get('/api/portfolio', function(req, res){
  console.log("Console from line 93 server.js req.user:", req.session.user)
  let user = Object.assign(req.user, req.session.user );
  console.log("user:", user);
  console.log("req.user:", req.user);
  res.status(200).send(req.user);
  // res.send(req.user)
})

// Sign user out of session

app.get('/api/signout', function(req, res){
  req.logout();
  console.log('signed out')
  res.status(200).send(true);
})

app.post('/api/checkout', function(req, res){
  console.log("req.body", req.body)
  console.log("req.user", req.user)

  const elephantDb = req.app.get('db');

  req.body.map(loan => {
    // //Insert into the borrower table
    // elephantDb.add_borrower([loan.loan.name, loan.loan.location.country, loan.loan.image.id]).then(borrower => console.log(borrower) )
    // //Insert into the loan table
    // elephantDb.add_loan([loan.loan.id, loan.loan.status, loan.loan.funded_amount, loan.loan.use, loan.loan.sector, loan.loan.posted_date, loan.loan.planned_expiration_date])
    // //Insert into the transaction table

    console.log("loan.id", loan.loan.id)
    console.log("loan.name", loan.loan.name)
    console.log("loan.status", loan.loan.status)
  })

  res.status(200)
})

// Add item to cart

// app.post('/api/cart', (req, res) =>{
//   req.session.user.cart.push(req.body);
//   console.log("Console server.js line 116:", req.session.user)
//   res.status(200).send(req.session.user);
// })

// Remove item from cart

// app.delete('/api/cart', (req, res) =>{
//   console.log("Delete: ", req.query.id);
//   const { id } = req.query;
//   const { cart } = req.session.user;
//   console.log("req.session.cart: ", cart)

//   let newCart = cart.filter(items => {
//     return items.id != id
//   })

//   console.log("New Cart: ", newCart);

//   res.status(200).send(newCart);
// })

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on ${port}.`)
});