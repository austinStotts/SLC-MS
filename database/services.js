const db = require('./database');
const helper = require('./helpers');
const config = require('./db_config');

async function getPage(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT * FROM shows OFFSET $1 LIMIT $2', 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

//showjson should be pre-stringified*
async function addShow(showid, showjson) {
  const resonse = await db.query(
    `INSERT INTO shows (showid, showjson)
     VALUES ('${showid}', '${showjson}');`
  );
  return resonse;
}

module.exports = {
  getPage,
  addShow
}