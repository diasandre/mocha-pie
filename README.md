# mocha-pie 

## How to use:
- create your responses at: https://mocha-pie.netlify.app/
- generate UUID
- to call: https://mocha-pie.herokuapp.com/external/{UUID}
- TTL: 8 hours

## Headers (optional)
- status: to select what status response do you want to return (200,401,500). Default response is always 200 OK.
- is-required: what headers are required, separete fields by comma (header1,header2,header3).
- auth-required: will check if "authorization" headers has any value.

More headers comming soon... hehe

TO DO: improve this readme rs
