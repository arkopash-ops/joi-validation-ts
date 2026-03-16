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

| Validation    | Example              |
| ------------- | -------------------- |
| string        | Joi.string()         |
| number        | Joi.number()         |
| boolean       | Joi.boolean()        |
| email         | Joi.string().email() |
| regex         | pattern()            |
| enum          | valid()              |
| array         | Joi.array()          |
| nested object | Joi.object()         |
| date          | Joi.date()           |
| custom        | Joi.ref()            |



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

### 1. Create User
```http
POST http://localhost:8080/api/users/create
content-type: application/json

{
  "name": "ARK",
  "email": "ark@mail.com",
  "password": "123456",
  "confirmPassword": "123456",
  "age": 25,
  "role": "admin",
  "phone": "9876543210",
  "skills": [
    "Node",
    "TypeScript"
  ],
  "isActive": true,
  "address": {
    "street": "MG Road",
    "city": "Surat",
    "zipCode": "395007"
  }
}
```

### 2. Get All Users
```http
GET http://localhost:8080/api/users/getUsers
content-type: application/json
```


---

***Built for learning Joi validation in backend APIs.***
