//AIzaSyBcQ2VZEjucjBXhU8AjkDck8gBwiETmEoU

const request = require('request')

function googlePromise(url){
    return new Promise((resolve, reject) =>{
        request.get(url, (err, response, body) => {
            if(response.statusCode==200){
                var json = JSON.parse(body)
                resolve(json)
            } else {
                reject('Se produjo un error')
            }
        })
    })
}

var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=La+Ruina+Hermosillo+Sonora&key=AIzaSyBcQ2VZEjucjBXhU8AjkDck8gBwiETmEoU'

googlePromise(url).then(response => console.log(response))