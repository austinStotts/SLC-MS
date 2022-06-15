const { default: ss } = require("../ss.js");

const config = {
  db: {
    host: "fanny.db.elephantsql.com",
    port: '5432',
    user: 'ebddjabf',
    password: ss.dbpass,
    database: 'ebddjabf',
  },
  listPerPage: 10,
};

module.exports = config;