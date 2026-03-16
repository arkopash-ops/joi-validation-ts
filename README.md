# User Validation API (Joi + Node.js)

A simple REST API demonstrating different **data validation techniques using Joi**.  
This project is built for learning how to validate request data in a backend application.

## Project Goal

Create a small **User API** where **Joi** validates different types of data such as strings, numbers, enums, arrays, objects, regex patterns, and custom validations.

Each route demonstrates a different validation type.

---

## Tech Stack

- Node.js  
- Express.js  
- Mongoose  
- Joi (Schema Validation)  
- JavaScript / TypeScript  

---

## Project Structure
```text
joi-validation-api
├── src
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   │   └── user.controller.ts
│   ├── models
│   │   └── user.model.ts
│   ├── routes
│   │   └── user.routes.ts
│   ├── validations
│   │   └── user.validation.ts
│   ├── middlewares
│   │   └── validate.middleware.ts
│   ├── types
│   │   └── user.types.ts
│   ├── app.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```


---

# Validation Examples

The API demonstrates the following Joi validation types:

| Validation Type   | Example Field         |
| ----------------- | --------------------- |
| string            | name                  |
| email             | email                 |
| number            | age                   |
| boolean           | isActive              |
| valid / enum      | role                  |
| array             | hobbies               |
| object            | address               |
| optional          | bio                   |
| default           | createdAt             |
| min / max         | username              |
| regex             | phone                 |
| custom validation | password confirmation |


---

# What You Learn

- Joi schema creation
- Request validation middleware
- Custom validation using `Joi.custom`
- Regex validation
- Default values
- Nested object validation
- Array validation


---

# API Endpoints



---

***Built for learning Joi validation in backend APIs.***
