require("dotenv").config();
const server = require("./api/server.js");
const secrets = require("./configs/secrets");

const PORT = secrets.port;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
