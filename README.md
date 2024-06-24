# Securita
# Next.js RBAC User Verification Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a Next.js application built to demonstrate Role-Based Access Control (RBAC) using the Open Policy Agent (OPA) for user verification. The application features a frontend with a form to send user actions for verification and displays the response from the RBAC policy evaluation.

## Features

- User verification through RBAC policies
- API endpoints to handle POST requests for user actions
- Dynamic forms to input user details and actions
- Real-time feedback on policy evaluation
- Dockerized setup for easy deployment

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Typed superset of JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **shadcn/ui**: Component library used for building the UI.
- **Open Policy Agent (OPA)**: Policy engine for user verification.
- **Docker**: Containerization platform for deployment.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- Docker (for containerization)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
