INSERT INTO borrowers (name, location, image) VALUES ($1, $2, $3)

RETURNING id;