const request = require('request')

function bookPromise(url){
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

function authorPromise(url){
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

var titulo = ''

titulo = 'i robot'

titulo = titulo.replace(' ', '+')
console.log(titulo)

full_query = 'http://openlibrary.org/search.json?q=' + titulo
console.log(full_query)

//Si se quiere anidar promesas 
bookPromise(full_query).then(response => authorPromise(response.docs))
                  .then(response => console.log('Autor: ' + response.author_name[0]))
                  .catch(err => console.log(err))