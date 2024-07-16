


# URL Shortener API

A simple URL shortener API built with Node.js, Express, MongoDB, and Mongoose.

## Features

- Shorten long URLs and generate unique short URLs
- Redirect users from short URLs to original URLs
- Store URL mappings in a MongoDB database

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB database. You can use a local instance or a cloud-based service like MongoDB Atlas.

4. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```
   MONGO_URI=mongodb://localhost:27017/urlShortener
   ```

5. Start the server:

   ```bash
   node app.js
   ```

## API Endpoints

### Shorten URL

- **Endpoint:** `POST /shorten`
- **Description:** Shortens a long URL.
- **Request Body:**

  ```json
  {
    "originalUrl": "http://example.com"
  }
  ```

- **Response:**

  ```json
  {
    "originalUrl": "http://example.com",
    "shortUrl": "abc123"
  }
  ```

### Redirect to Original URL

- **Endpoint:** `GET /:shortUrl`
- **Description:** Redirects to the original URL corresponding to the short URL.
- **Response:**

  - **Status 302:** Redirects to the original URL.
  - **Status 404:** URL not found.

## Project Structure

```
url-shortener/
│
├── models/
│   └── url.js
├── routes/
│   └── index.js
├── app.js
└── package.json
```

## Example Requests

### Shorten a URL

```bash
curl -X POST http://localhost:5000/shorten -H "Content-Type: application/json" -d '{"originalUrl": "http://example.com"}'
```

### Redirect using Short URL

```bash
curl -L http://localhost:5000/abc123
```

