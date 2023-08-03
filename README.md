# Average Grade API

This is a simple Node.js API built with Express that calculates the average grade of three subjects. It listens for requests and calculates the average grade based on the provided grades.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AtercesMegassap/Grade-Average.git
```
Navigate to the project directory:
```bash
cd Grade-Average
```
Install dependencies:
```bash
npm install
```

Usage
Start the server:
```bash
node index.js
```
The server will start running at http://localhost:3000.

Use an API client (e.g., Postman) to send a GET request to http://localhost:3000/Average with the following parameters in the request body, in JSON format:
```
{
  "grade1": 85,
  "grade2": 90,
  "grade3": 78
}
```

The API will respond with the average grade of the three subjects.

Example Request:
```
GET http://localhost:3000/Average
Request Body:
{
  "grade1": 85,
  "grade2": 90,
  "grade3": 78
}
```
Example Response:
```The average grade of the three subjects is 84.33```

Please note that you need to use an API client (e.g., Postman) to make requests to the API, and the provided grade values should be valid numbers.

Average Grade Calculation
The API calculates the average grade of the three subjects by summing the grades and dividing by 3.