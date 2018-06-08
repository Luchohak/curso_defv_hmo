const request = require('request')

request.get('http://pokeapi.co/api/v2/pokemon/6',
            (error, response, body) => {
                console.log(`Error -> ${error}`)
                console.log(`Response -> ${response.statusCode}`)
                var json = JSON.parse(body)
                if(response.statusCode == 200){
                    console.log('Peticion exitosa')
                    console.log(json.name)
                    //console.log(json.moves)
                    for(var i = 0; i < json.moves.length; i++){
                        console.log(`Movimiento numero: ${i+1} --- ` + json.moves[i].move.name)
                    }
                } else {
                    console.log('Poke no encontrado :(')
                }
                console.log(`Body -> ${JSON.parse(body)}`)

            });