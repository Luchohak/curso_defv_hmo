const request = require('request')

function peoplePromise(){
    return new Promise((resolve, reject)=>{
        request.get('https://swapi.co/api/people/1', (err, response, body) => {
            if(response.statusCode==200){
                var json = JSON.parse(body)
                resolve(json)
            }else{
                reject('Se produjo un error')
            }
        })
    })
}

function filmPromise(url){
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

//Si se quiere anidar promesas 
peoplePromise().then(response => filmPromise(response.films[0]))
                  .then(response => console.log('Título: ' + response.title))
                  .catch(err => console.log(err))