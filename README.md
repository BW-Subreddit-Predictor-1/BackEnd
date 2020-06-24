# BackEnd
# API documentation

Base URL (https://www.google.com) coming soon!!


# Auth Routes

# Sign Up

# Register A User

Method Url: ```/api/auth/register``` HTTP Method: POST

1. Creation/ regiter Flow

| # Endpoints        | # Method  | # Other                 |
| -------------------|:---------:| -----------------------:|
| /api/auth/register |   POST    | Register                |

# Example:

```
{
    "FirstName" : "FirstName":,
    "LastName" : "LastName",
    "Email" : "Email",
    "password" : "password"
 }
 
```
2. Creation / Login Flow

| # Endpoints        | # Method  | # Other                 |
| -------------------|:---------:| -----------------------:|
| /api/auth/login    |   POST    | Login a User with Token |


# Example:

```
{
   "Email" : "Email",
   "password" : "password"
}

```

3.  User Routes

| # Endpoints | # Method | # Other               |
| ------------|:--------:| ---------------------:|
| /api/user   |   GET    | Gets a List of Users  |


