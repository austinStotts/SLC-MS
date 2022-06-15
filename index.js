const express = require("express");
const app = express();
let config = require("./database/db_config");
let db = require('./database/database');

const { Pool, Client } = require('pg')
const { default: ss } = require("./ss");

let queries = require("./database/services");


// /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/ /*/



app.get('/', (req, res) => {
  console.log(req.query.page)
  queries.getPage(req.query.page).then(res => {console.log(res)}).catch(err => console.log(err));
})

app.get('/addshow', (req, res) => {
  queries.addShow(shows[0].showid, JSON.stringify(shows[0])).then(res => {console.log(res)}).catch(err => console.log(err));
})

app.listen(4000, () => {
  console.log("roger roger");
});

let shows = [
  {
    "name": "Koyomimonogatari",
    "showid": "koyomimonogatari",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/koyomimonogatari/assets/promo.jpeg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/koyomimonogatari/assets/banner.jpg",
    "year": "2016",
    "studio": "Shaft"
  },
  {
    "name": "Monogatari Series Second Season",
    "showid": "monogatari_series_second_season",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/monogatari_series_second_season/assets/promo.jpeg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/monogatari_series_second_season/assets/promo.jpeg",
    "year": "2013",
    "studio": "Shaft"
  },
  {
    "name": "Nisemonogatari",
    "showid": "nisemonogatari",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/nisemonogatari/assets/promo.jpg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/nisemonogatari/assets/banner.jpg",
    "year": "2012",
    "studio": "Shaft"
  },
  {
    "name": "Owarimonogatari Second Season",
    "showid": "owarimonogatari_second_season",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/owarimonogatari_second_season/assets/promo.jpeg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/owarimonogatari_second_season/assets/banner.jpg",
    "year": "2017",
    "studio": "Shaft"
  },
  {
    "name": "Owarimonogatari",
    "showid": "owarimonogatari",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/owarimonogatari/assets/promo.jpg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/owarimonogatari/assets/banner.jpg",
    "year": "2015",
    "studio": "Shaft"
  },
  {
    "name": "Summer Time Rendering",
    "showid": "summer_time_rendering",
    "url": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/summer_time_rendering/assets/banner.jpeg",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/summer_time_rendering/assets/promo.jpeg",
    "banner": "",
    "year": "2022",
    "studio": "OLM"
  },
  {
    "name": "Land of the Lustrous",
    "showid": "land_of_the_lustrous",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/land_of_the_lustrous/assets/promo.jpeg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/land_of_the_lustrous/assets/banner.jpeg",
    "year": "2017",
    "studio": "Orange"
  },
  {
    "name": "Demon Slayer: Kimetsu no Yaiba",
    "showid": "demon_slayer_kimetsu_no_yaiba",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/demon_slayer_kimetsu_no_yaiba/assets/promo.jpeg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/demon_slayer_kimetsu_no_yaiba/assets/banner.jpeg",
    "year": "2019",
    "studio": "Ufotable"
  },
  {
    "name": "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    "showid": "demon_slayer_kimetsu_no_yaiba_mugen_train",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/demon_slayer_kimetsu_no_yaiba_mugen_train/assets/promo.jpeg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/demon_slayer_kimetsu_no_yaiba_mugen_train/assets/banner.jpeg",
    "year": "2020",
    "studio": "Ufotable"
  },
  {
    "name": "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
    "showid": "demon_slayer_kimetsu_no_yaiba_entertainment_district_arc",
    "url": "",
    "promo": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/demon_slayer_kimetsu_no_yaiba_entertainment_district_arc/assets/promo.jpg",
    "banner": "https://stevelovescartoons.s3.us-east-2.amazonaws.com/shows/demon_slayer_kimetsu_no_yaiba_entertainment_district_arc/assets/banner.jpg",
    "year": "2021",
    "studio": "Ufotable"
  }
]