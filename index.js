var co = require('co');
var axios = require('axios');

var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];


function readFilePromise(url){
    return axios.get(url, function(err, data){
        if(err){
            reject(err);
        } else{
            resolve(data);
        }
        });
    };


async function run() {
    var values = await urls.map(function(url) {
    return readFilePromise(url)
    })
    return values;
}

run().then(function(values) {
    console.log(values);
});