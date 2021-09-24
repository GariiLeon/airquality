const request = require('request')
const Airquality = require('../models/airquality')

const base_api_url = "http://api.airvisual.com/v2/nearest_city"
const iqair_api_key = "44574d8a-ddbd-480a-b936-df3bb1582970"
const default_request_options = {
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
};
  
  
exports.getNearestCityQualityAir = (req, res, next) => {
    
    let lat = req.query.lat;
    let lon = req.query.lon;
    if(
        (lat >= -90 && lat <= 90) &&
        (lon >= -180 && lon <=180)
    ){

        request({
            url: `${base_api_url}?lat=${lat}&lon=${lon}&key=${iqair_api_key}`,
            ...default_request_options
        },(err, response, body)=>{
            if(err){
                res.status(400).json({
                    error: err
                });
            }else if(response.statusCode === 200){
                console.log(body)
                res.status(200).json({
                    result : {
                        pollution : body.data.current.pollution
                    }
                })
            }else{
                res.status(response.statusCode).json({
                    message: response.statusMessage
                })
            }
        })

    }else{
        res.status(400).json({
            error: "The latitude range is [-90, 90] and the longitude range is [-180, 180]"
        });
    }
}

exports.getMostPollutedDateAndTimeParis = (req, res, next) => {
    Airquality.find().sort({aqius : -1}).limit(1).then((aqi) => {
        console.log(aqi)
        res.status(200).json({
            dateTime : new Date(aqi[0].ts)
        })
    })
}