# email-validator-microservice

A microservice one can use to validate emails.

**Get Started**

1) Clone this repo onto your local machine
2) Change directories to the newly cloned repo
3) Run this command to install the dependencies - `npm install`
4) Start the server by running - `npm start`
5) Once done, you can now make POST requests to `localhost:3005/validate-email`

**REQUEST data from the microservice**
To request data from the microservice endpoint (`\validate-email`), you can send a POST request with the email data in the body. Here's an example using Axios:

```
const emailData = {
  email = 'example@email.com'
}

axios.post(`localhost:3005/validate-email`, emailData)
  .then(response => {
    console.log(response)
  }
  .catch(error => {
    console.error('Error:', error)
  })
```

***RECEIEVE data from the microservice***
The microservice endpoint responds with JSON data containing information about whether the provided email is valid or not. 

```
{
  "isValid": true/false
}
```

Once a response is received, the then block in the example above allows you to handle the adta received. The example logs the received data to the console.


![Screen Shot 2023-11-13 at 10 33 13 PM](https://github.com/ricqosu/email-validator-microservice/assets/114196925/b201829e-67f2-48ca-a884-20d66f4c818f)

