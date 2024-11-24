
---

# URL Shortener Service

This is a simple URL shortening service built using **TypeScript**, **Express**, and **EJS**. It allows users to shorten long URLs and redirect to the original URL using a unique short URL. The project uses **express-validator** for input validation and basic error handling for incorrect URLs or shortcode entries.

## Features

- **Shorten URL**: Users can input a long URL, and a short code (6 characters) will be generated for it.
- **Redirect via Short URL**: Users can visit a short URL, and the service will redirect them to the original long URL.
- **Basic Input Validation**: The service validates URLs for correctness and the length of the shortcode.
- **Custom Error Pages**: Friendly error messages are displayed for invalid URLs and non-existent shortcodes.

## Project Structure

```bash
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Exact versions of installed packages
├── README.md               # Project documentation
├── src
│   ├── controllers         # Contains route handling logic
│   │   └── urlController.ts
│   ├── models              # Data models (URL mappings)
│   │   └── URLMappingModel.ts
│   ├── routes              # Routes for short URL generation and redirection
│   │   └── urlShorting.ts
│   ├── script.ts           # Entry point for the server
│   ├── validators.ts       # Input validation logic
│   └── views               # EJS templates for rendering HTML pages
│       ├── 404.ejs         # Custom 404 error page
│       └── index.ejs       # Home page for shortening URLs
└── tsconfig.json           # TypeScript configuration file
```

## Requirements

- **Node.js** (v14.x or later)
- **npm** (or **yarn**) for managing dependencies
- TypeScript (configured via `tsconfig.json`)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/julius-amt/url-shortner.git
cd url-shortener
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

This will run the application in development mode using **nodemon**. The server will restart automatically when you make changes to the code.

## Endpoints

### Home Route (`GET /`)

This is the landing page of the URL shortener service. You can enter a long URL to generate a shortened version.

- **Input**: A valid URL (e.g., `https://www.example.com`)
- **Output**: A new short URL (e.g., `http://localhost:3000/abc123`)

### Shorten URL (`POST /shorten`)

This endpoint generates a shortened URL for the provided long URL.

- **Input**:
    - `longURL`: A valid URL to be shortened
- **Validation**: The URL must be a valid URL format.
- **Output**: A short URL that redirects to the provided long URL.
  


### Redirect (`GET /:shortURL`)

This endpoint redirects the user from the short URL to the original long URL.

- **Input**: A valid 6-character shortcode (e.g., `abc123`)
- **Output**: A redirection to the corresponding long URL.

### Error Handling

- **404 Page**: Displays if the user tries to access an invalid short URL or provides an incorrect URL.
- **Invalid URL Validation**: Shows an error message if the provided long URL is not valid.

## Files Breakdown

### `src/controllers/urlController.ts`

This file contains the logic for handling the routes and rendering the views. It includes:
- `handleHomeRoute`: Renders the home page (`index.ejs`).
- `handleShortenUrl`: Validates the URL and creates a shortened version.
- `handleRedirect`: Looks up the shortened URL and redirects the user to the long URL.

### `src/validators.ts`

This file contains validation rules for the long URL and short URL.
- `urlValidator`: Validates the long URL input for correctness.
- `shortCodeValidator`: Validates the shortcode parameter to ensure it is exactly 6 characters long.

### `src/models/URLMappingModel.ts`

This file defines the structure of the URL mappings using TypeScript. It contains:
- `URLPair`: A type representing the mapping between a short URL and a long URL.
- `urlMappings`: An array that holds the list of all URL pairs (used as a simple in-memory data store).

### `src/views/index.ejs`

This file is the view rendered when a user visits the home page. It includes a form to submit long URLs and displays a list of all generated short URLs.

### `src/views/404.ejs`

This is a custom 404 page rendered when a user tries to access an invalid shortcode or provides an invalid URL.

## Configuration

### `tsconfig.json`

This file is the TypeScript configuration that sets up the compiler options, such as module resolution, target version, and more. You can adjust it according to your needs.

## Development

- **Nodemon**: Automatically restarts the server when files change during development.
- **TypeScript**: Used to ensure type safety across the project.

## Contributions

Feel free to fork the repository and submit pull requests. If you'd like to contribute to the project, follow these steps:

1. Fork the repository
2. Clone your fork to your local machine
3. Make your changes
4. Commit and push your changes
5. Create a pull request from your fork to the main repository

## License

This project is licensed under the MIT License.

