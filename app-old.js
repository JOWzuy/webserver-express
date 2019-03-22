const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });

        let salida = {
            nombre: 'Matias',
            edad: 25,
            url: req.url

        }
        res.write(JSON.stringify(salida));
        //  res.write('HolaMundo');
        res.end();
    })
    .listen(8080);