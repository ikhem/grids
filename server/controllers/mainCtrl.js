module.exports = {
  getLoans: (req, res) => {
    const db = req.app.get('db');

    db.get_loans()
      .then( loans => res.status(200).send(loans))
      .catch( () => res.status(500).send());
  },
  getPortfolio: (req, res) => {
    console.log("Console from line 93 server.js req.user:", req.session.user)
    let user = Object.assign(req.user, req.session.user );
    console.log("user:", user);
    console.log("req.user:", req.user);
    res.status(200).send(req.user);
    // res.send(req.user)
  },
  signOut: (req, res) => {
    req.logout();
    console.log('signed out')
    res.status(200).send(true);
  },
  checkOut: (req, res) => {
    console.log("req.body", req.body)
    console.log("req.user", req.user)
  
    const db = req.app.get('db');
  
    req.body.map(loan => {
      console.log("loan.id", loan.loan.id)
      console.log("loan.name", loan.loan.name)
      console.log("loan.status", loan.loan.status)
    })
  
    res.status(200)
  },
  populateLoans: (req, res) => {
    console.log("req.body popLoans", req.body.loans)
    
    const db = req.app.get('db');
    
    req.body.loans.map(loan => {
      db.add_borrower([loan.name, loan.location.country, loan.image.id])
    })
    
    res.status(200).send(req.body)
  }
}