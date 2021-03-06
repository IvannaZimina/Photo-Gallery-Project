/*** Module dependencies.*/
const expressServer = require('../../../servers/expressServer');
const debug = require('debug')('photogaleryproject-2021-11-01:server');
const http = require('http');

const { httpPort } = require('../../../config/server');

const run = () => {
    /*** Get port from environment and store in Express.*/
    const port = httpPort;
    expressServer.set('port', port);

    /*** Create HTTP server.*/
    const httpServer = http.createServer(expressServer);

    /*** Listen on provided port, on all network interfaces.*/
    httpServer.listen(port);
    httpServer.on('error', onError);
    httpServer.on('listening', onListening);

    /*** Event listener for HTTP server "error" event.*/
    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
            case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
            default:
            throw error;
        }
    }

    /*** Event listener for HTTP server "listening" event.*/
    function onListening() {
        const addr = httpServer.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        debug('Listening on ' + bind);
    };

    return httpServer;
}

module.exports = run;