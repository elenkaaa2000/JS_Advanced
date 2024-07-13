function solve(object){
let methodArray = ["GET", "POST", "DELETE", "CONNECT"];
let versionArray = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0" ]
let uriPattern = /^[\w.]+$/g;
let messageA = ["<", ">", "\\", "&", `'`, `"`];


if(!methodArray.includes(object.method)){
    throw new Error('Invalid request header: Invalid Method')
}

if(!versionArray.includes(object.version)){
    throw new Error('Invalid request header: Invalid Version')
}

if(!object.hasOwnProperty("message")){
    throw new Error('Invalid request header: Invalid Message')
}

for(let el of object.message){
    if(messageA.includes(el)){
        throw new Error('Invalid request header: Invalid Message')
    }
}

if(!object.uri || !object.uri.match(uriPattern) || object.uri === '*' ){
throw new Error('Invalid request header: Invalid URI')
}
return object
}
solve({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
})