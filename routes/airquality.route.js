const express = require('express');
const router = express.Router();

const airqualityCtrl = require('../controllers/airquality.controller');

router.get('/nearest-city-gps', airqualityCtrl.getNearestCityQualityAir);
router.get('/paris-polluted-time', airqualityCtrl.getMostPollutedDateAndTimeParis);

module.exports = router;