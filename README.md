# API Bank

_API project_

<br>

## 🌟 About

This project is for educational purposes only. Pull request are welcome, but priority for project authors! Thank you for your cooperation!

## 🎯 Project features/goals

-   API
-   Express.js

## 🧰 Getting Started

### 💻 Prerequisites

Node.js - _download and install_

```
https://nodejs.org
```

Git - _download and install_

```
https://git-scm.com
```

Insomnia (or other equivalents) - _download and install_

```
https://insomnia.rest/download
```

### 🏃 Run locally

Would like to run this project locally? Open terminal and follow these steps:

1. Clone the repo to your selected folder
    ```sh
    git clone https://github.com/monicule/express-bank.git
    ```
2. Install NPM packages
    ```sh
    npm i
    ```
3. Run the server
    ```sh
    npm run dev
    ```

## 📝 API Endpoints

### /api/account

> POST

```
/api/account
```

-   Creates a new account
-   HTTP method - POST

Data example:

```
    {
    "name": "John",
    "surname": "Doe",
    "dob": "2000-01-01"
    }
```

Requirements:

-   Account can be created just by adults (from 18 years).
-   Name and surname combination must be unique.

> GET

```
/api/account/{name}-{surname}
```

-   Returns account owners name, surname, and date of birth.
-   HTTP method - GET

Response example:

```
    {
    "name": "John",
    "surname": "Doe",
    "dob": "2000-01-01"
    }
```

> DELETE

```
/api/account/name-surname
```

-   Deletes account
-   HTTP method - DELETE

Requirements:

-   Deletes an account if the balance is zero.

> PUT

```
/api/account/name-surname
```

-   Updates the account details (name, surname, and date of birth).
-   HTTP method - PUT

Data to send:

-   name
-   surname
-   day of birth (YYYY-MM-DD)

### /api/account/name

> GET

```
/api/account/john-doe/name
```

Retrieves the first name of the account holder.

> PUT

```
/api/account/john-doe/name
```

Updates the first name of the account holder.

### /api/account/surname

> GET

```
/api/account/john-doe/surname
```

Retrieves the surname of the account holder.

> PUT

```
/api/account/john-doe/surname
```

Updates the surname of the account holder.

### /api/account/dob

> GET

```
/api/account/john-doe/dob
```

Retrieves the day of birth of the account holder.

> PUT

```
/api/account/john-doe/dob
```

Updates the day of birth of the account holder.

### /api/withdrawal

> POST

Data to send:

-   amount of money
-   name
-   surname

Withdraws the money form account.

### /api/deposit

> POST

Data to send:

-   amount of money
-   name
-   surname

Deposits money to the account.

### /api/transfer

> POST

Data to send:

-   sender: name
-   sender: surname
-   receiver: name
-   receiver: surname
-   amount of money

Transfers money between accounts

## 👀 Authors

Monika: [Github](https://github.com/monicule)

## ⚠️ License

Distributed under the MIT License. See LICENSE.txt for more information.

## 🔗 Other resources

No other resources.
