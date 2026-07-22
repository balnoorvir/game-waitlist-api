#  Game Waitlist CRUD API with Route Parameters

A RESTful backend API built with **Node.js** and **Express.js** to manage a game waitlist. The API supports complete CRUD (Create, Read, Update, Delete) operations using route parameters and returns standardized JSON responses.
This project is a RESTful backend API built with Node.js and Express to manage a game waitlist. Initially, the API contains sample players, John and Sarah. Staff can retrieve the waitlist, add new players, update player details, or remove players when they get a gaming slot. The project demonstrates CRUD operations, route parameters, input validation, XSS sanitization, and standardized JSON responses. Currently, the data is stored in memory for simplicity, so it resets when the server restarts. In a production environment, this would be connected to a database such as MongoDB or MySQL.

##  Features

* View all players in the waitlist
* View a single player by ID
* Add a new player to the waitlist
* Update an existing player's information
* Delete a player from the waitlist
* Input validation for required fields
* XSS input sanitization using the `xss` package
* Standardized JSON responses
* Analytics simulation using console logs
* Handles empty waitlists and invalid player IDs gracefully

---

##  Tech Stack

* Node.js
* Express.js
* JavaScript
* Thunder Client (for API testing)
* xss (Input Sanitization)



##  Security

* XSS input sanitization using the `xss` package.
* Validation for missing or empty input fields.
* Standardized JSON responses for successful operations and errors.

---

##  Deployment

* **GitHub Repository:** **
* **Live API:** **

