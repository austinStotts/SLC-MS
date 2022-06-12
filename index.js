const express = require("express");
const app = express();
// const AWS = require("aws-sdk");
// const { default: ss } = require("./ss");

// const config = AWS.config.update({accessKeyId: ss.ak, secretAccessKey: ss.sak, region: "us-east-1b"});

const { Pool, Client } = require('pg')
const { RDS } = require('aws-sdk');
const { default: ss } = require("./ss");

// const signerOptions = {
//   credentials: {
//     accessKeyId: ss.ak,
//     secretAccessKey: ss.sak,
//   },
//   region: 'us-east-1b',
//   hostname: 'slc-pg-instance-1.cy3tss6eeiyt.us-east-1.rds.amazonaws.com',
//   port: 5432,
//   username: 'slcpg',
// }

// const signer = new RDS.Signer()
// const getPassword = () => signer.getAuthToken(signerOptions)

// const pool = new Pool({
//   host: signerOptions.hostname,
//   port: signerOptions.port,
//   user: signerOptions.username,
//   database: 'slc-pg',
//   password: getPassword,
// })


const client = new Client({
  user: 'slcpg',
  host: ss.host,
  database: 'slc-pg',
  password: ss.dbpass,
  port: 5432,
})
client.connect().then(res => {console.log(res)}).catch(error => {console.log(error)})

const createTable = () => {
  console.log("MAKE MAKE MAKE")
  client.query(`
  CREATE TABLE IF NOT EXISTS "shows" (
    "id" serial,
    "showid" text,
    "showjson" text,
    PRIMARY KEY( id )
  );`).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  })
}

const listShows = () => {

}

const listEpisodes = () => {

}






// /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/



app.get('/', (req, res) => {
  
  res.send("creating table");
})

app.listen(4000, () => {
  console.log("roger roger");
});

