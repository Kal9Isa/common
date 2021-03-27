# Common Modules for Error Handling & Middlewares Used in Ticketing Project

## Errors

- **`BadRequestError`**

	Contains a `400` status code and an arbitrary message

- **`CustomError`**

	A base class to contain status code along with message

- **`DatabaseConnectionError`**

	Generic error for database connection issues

- **`NotAuthorizedError`**

	Contains a `401` status code along with `Unauthorized` message

- **`NotFoundError`**

	Contains a `400` status code along with `NotFound` message

- **`RequestValidationError`**

	To be used with `express-validator` for validation of incoming requests

## Middlewares

- **`currentUser`**

	A middleware to extract `jwt` token from cookie in request header

- **`errorHandler`**

	A middleware to return serialized error messages as below:

	```json
	{
		"errors": [
			{
				message: "message", 
				field: "input field"
			}
		]
	}
	``` 

- **`requireAuth`**

	A middleware to detect login status

- **`validateRequest`**

	A middleware to throw custom errors from validation of user input