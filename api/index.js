const express = require("express");
const cors = require("cors");
const jwtAuth = require("./src/utilities/middleware/jwtAuth");
const path = require("path");
const multipart = require("connect-multiparty");

// Init express:
const app = express();

// CORS(Cross-Origin-Resource-Sharing) - Allows us to access from device
app.use(cors());

// Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware:
app.use("*", jwtAuth);

const multipartMiddleware = multipart({ uploadDir: "./uploads" });

// Image hosting:
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

// Progressive web app hosting:
// app.use(express.static(path.join(__dirname, "dist")));

/* app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
}); */

// Routes:
app.use("/api/auth", require("./src/api/auth-routes"));
app.use("/api/user", multipartMiddleware, require("./src/api/user-routes"));
app.use("/api/provider", require("./src/api/provider-routes"));
app.use("/api/listing", multipartMiddleware, require("./src/api/listing-routes"));
app.use("/api/booking", require("./src/api/booking-routes"));
app.use("/api/chat", require("./src/api/chat-routes"));

// Port:
const PORT = process.env.PORT || 3000;

// Listen/Init web server:
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
