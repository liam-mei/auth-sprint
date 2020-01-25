# Sprint Challenge: Authentication - Dad Jokes

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

  - [ ] sessions are a way to remember that a user has already been authenticated so they don't need to login again

- [ ] What does bcrypt do to help us store passwords in a secure manner.

  - [ ] it hashes the password to hide the plain text password

- [ ] What does bcrypt do to slow down attackers?

  - [ ] bcrypt will hash the passwords exponentially to prevent rainbow tables
  - [ ] it also has salts which are random but don't slow down attackers

- [ ] What are the three parts of the JSON Web Token?
  - [ ] header - algorithm and token type
  - [ ] payload - data that is encoded with token
  - [ ] verify signature

## Minimum Viable Product

- Implement an User Authentication System.
- Hash user's passwords before saving them to the database.
- Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality
- [ ] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
