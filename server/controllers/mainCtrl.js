module.exports = {
  getLoans: (req, res) => {
    const db = req.app.get('db');

    db.get_loans()
      .then( loans => {
        console.log("Loans: ", loans)
        res.status(200).send(loans)})
      .catch( () => res.status(500).send());
  },
  getPortfolio: (req, res) => {
    const db = req.app.get('db');
    console.log("u: ", req.user);
    if(req.user){
      db.get_outstandingSum([req.user.id]).then(money => {
      db.get_outstandingLoans([req.user.id]).then(loans => {
        res.status(200).send({user: req.user, sumOutstanding: money[0].sum , loansOutstanding: loans});
      }).catch( err => console.log(err))
    }).catch( err => console.log(err))
    } else {
      console.log("User not logged in")
      res.status(500)
    }
    // res.status(200).send(req.user);
    
  },
  signOut: (req, res) => {
    req.logout();
    console.log('User has signed out. Redirect to landing page.');
    res.status(200).send(true);
  },
  checkOut: (req, res) => {
    // console.log("req.body", req.body)
    // console.log("req.user", req.user)
    const{ id } = req.user;
    const db = req.app.get('db');

    req.body.map(loan => {
    db.add_transaction([id, loan.loan.id, loan.amount]).then(confirm => res.status(200) )  
      // console.log("User", id)
      // console.log("loan.id", loan.loan.id)
      // console.log("loan.status", loan.amount)
    })
  
    res.status(200).send([])
  }
}