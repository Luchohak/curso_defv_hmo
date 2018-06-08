const request = require('request')

request.get('https://swapi.co/api/people/1',
            (error, repsonse, body) => {
                
                var json = JSON.parse(body)
                //console.log(json.films[0])

                request.get(json.films[0],
                            (error, response, body) => {
                                var json_film = JSON.parse(body)
                                console.log(json_film.title)
                            })

            })