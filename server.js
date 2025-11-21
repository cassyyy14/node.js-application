const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Ma. Cassandra E. Matosinos");
  res.write("BA-4102");
  res.write("Respect yourself enough to walk away from anything that no longer grows you.");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});