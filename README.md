# MERN Voting Application

![MERN Voting Application](./client/public/logo.png)

A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that enables users to participate in voting activities, cast votes for candidates, and provides an admin panel for managing candidates and fetching results.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [User Features](#user-features)
  - [Admin Panel Features](#admin-panel-features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **User Features:**
  - User authentication: Sign up, log in, and log out securely.
  - Browse and participate in voting for candidates.
  - Real-time updates: View live results as votes are cast.

- **Admin Panel Features:**
  - Secure admin login.
  - Add new candidates with relevant information.
  - Delete candidates who are no longer participating.
  - Fetch voting results and candidate statistics.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ProgrammingWithAnurag/mernVotingApplication.git

   User Features
Register for an account or log in if you already have one.
Browse the list of candidates.
Cast your vote and see real-time updates of the voting results.
Admin Panel Features
Log in with admin credentials.
Add new candidates with relevant details.
Delete candidates who are no longer participating.
Fetch voting results and candidate statistics.
Technologies Used
Frontend:

React
Redux for state management
Axios for API requests
WebSocket for real-time updates
Backend:

Node.js
Express.js
MongoDB with Mongoose for database interactions
WebSocket for real-time communication
Authentication:

JSON Web Tokens (JWT)
Styling:

CSS (styled-components)
