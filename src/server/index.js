const request = require('request');

var getWeather = (location,callback) => {
    request({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=588d1a8267c116eebfe852f34ebd749e`,
        json : true
      }, (err,res,body) => {
         if(err) throw err;
        if(!err && (res.statusCode === 200)){
          var response = {
            temperature : body.main.temp,
            pressure : body.main.pressure,
            humidity : body.main.humidity,
            wind : body.wind.speed,
            precipitation : body.clouds.all

          } 
          callback(response)
        } else{
          callback('Unable to fetch weather');
        }
      })
};


module.exports.getWeather = getWeather;