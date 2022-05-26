// import app.js file
const app = require("./backend/app");

// server BE: http://localhost:3000
app.listen(3000, () => {
  console.log("Backend Server is running on PORT 3000 ...");
});
