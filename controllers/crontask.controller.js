const request = require('request')
const Airquality = require('../models/airquality')


exports.checkParisAirQuality = () => {

    request({
        url: `http://api.airvisual.com/v2/nearest_city?lat=48.856613&lon=2.352222&key=44574d8a-ddbd-480a-b936-df3bb1582970`,
        method: 'GET',
        json: {},
        qs: {
            offset: 20
        }
    },(err, response, body)=>{
        if(err){
            console.log(err)
        }else if(response.statusCode === 200){
            try{
                Airquality.create({...body.data.current.pollution})
            }catch(error){
                console.log(error)
            }
        }
    })
}