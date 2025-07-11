# 🌾 Farmart API

Farmart is an agricultural backend service that provides categorized farm input data such as fertilizers, pesticides, manures, seeds, irrigation methods, and harvest crops. This Express.js server serves the data from a local JSON file through REST API endpoints.

---

## 🚀 Features

- RESTful API built with Node.js and Express
- Serves:
  - Fertilizers
  - Pesticides
  - Manure types
  - Seed types
  - Irrigation methods
  - Harvest crop types
- Simple JSON data structure
- CORS enabled
- Easy to plug into your frontend (React, iOS, Android, etc.)

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/farmart-api.git
   cd farmart-api
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```
farmart-api/
│
├── data/
│   └── data.json           # Static farm input data
│
├── src/
|    └── index.js              # Main Express server
├── package.json
└── README.md
```

---

## 🔗 API Endpoints

| Method | Endpoint      | Description            |
| ------ | ------------- | ---------------------- |
| GET    | `/`           | Base route             |
| GET    | `/fertilizer` | Get fertilizer types   |
| GET    | `/pesticides` | Get pesticide names    |
| GET    | `/manure`     | Get manure types       |
| GET    | `/seeds`      | Get seed types         |
| GET    | `/irrigation` | Get irrigation methods |
| GET    | `/harvest`    | Get harvest crop types |

---

## 🔧 Customization

* Add more categories or data fields in `data/data.json`
* Extend endpoints in `server.js` to include filtering, pagination, or search

---

## 👨‍🌾 Author

Made with ❤️ by Anubhav Dubey for the Farmart Hackathon Project

