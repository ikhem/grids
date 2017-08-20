SELECT loans.id, borrowers.name, status, funded_amount, borrowers.image, borrowers.location as country, borrowers.long as long, borrowers.lat as lat, origination_date, expiration_date, loan_amount, purpose as use, lender_count 
FROM borrowers
JOIN loans ON borrowers.id = loans.id
JOIN transactions ON loans.id = transactions.loan_id
WHERE lender_id = $1