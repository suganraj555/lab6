http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(req,resp){
    var path=url.parse(req.url).pathname;
    console.log('request for '+path+'received');
    var query=url.parse(req.url).query;
    console.log(query);
    var name=querystring.parse(query)['name'];
    var email=querystring.parse(query)['email'];
    resp.write('hello ' +name+' '+email)
    resp.end();
}
http.createServer(onRequest).listen(4577);
console.log("server started");