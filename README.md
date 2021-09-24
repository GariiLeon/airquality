# airquality

This is a simple API allowing consumers to view air quality of the nearest city given a gps coordinates from IQAIR API.

## Installation


 - Clone the repository
 - Run `npm install`
 - Run `npm start`
 - Use the API at your localhost with the given port in console


## AirQuality Collection [/airquality]

### Get the air quality of a given gps coordinates nearest city [GET]

+ Request (application/json)
    + URL

        /nearest-city-gps?lat={{LATITUDE}}&lon={{LONGITUDE}}
    
    Where {{LATITUDE}} is the latitude, range is [-90, 90] and {{LONGITUDE}} is the longitude, range is [-180, 180]

+ Response 200 (application/json)

    + Body

    ```json
        {
            "result": {
                "pollution": {
                    "ts": "2021-09-24T15:00:00.000Z",
                    "aqius": 46,
                    "mainus": "p2",
                    "aqicn": 16,
                    "maincn": "p2"
                }
            }
        }
    ```

### Get the date and time of the most polluted air in Paris [GET]
+ Location

    /paris-polluted-time

+ Response 200 (application/json)

    ```json
        {
            "dateTime": "2021-09-24T17:00:00.000Z"
        }
    ```