-- select sum(amount) from transactions where loan_id = $1

select loan_id, sum(amount) from transactions group by loan_id