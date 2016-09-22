var HTTPS_PORT = 8443;

var fs = require('fs');
var https = require('https');
var WebSocketServer = require('ws').Server;

// Yes, SSL is required
var serverConfig = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
};

// ----------------------------------------------------------------------------------------

// Create a server for the client html page
var handleRequest = function(request, response) {
    // Render the single client html file for any request the HTTP server receives
    console.log('request received: ' + request.url);

    if(request.url == '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(fs.readFileSync('client/index.html'));
    } else if(request.url == '/webrtc.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/webrtc.js'));
    } else if(request.url == '/adapter-latest.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/adapter-latest.js'));
    } else if(request.url == '/style.css') {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.end(fs.readFileSync('client/style.css'));
    } else if(request.url == '/car.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/car.js'));
    }else if(request.url == '/heart.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/heart.js'));
    }else if(request.url == '/glass.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/glass.js'));
    }else if(request.url == '/ThreeDModelLoader.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/ThreeDModelLoader.js'));
    } else if(request.url == '/three.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/three.js'));
    } else if(request.url == '/Detector.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/Detector.js'));
    } else if(request.url == '/OrbitControls.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/OrbitControls.js'));
    } else if(request.url == '/OBJLoader.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/OBJLoader.js'));
    } else if(request.url == '/MTLLoader.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/MTLLoader.js'));
    } else if(request.url == '/tracking.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/tracking.js'));
    } else if(request.url == '/tracking-min.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/tracking-min.js'));
    } else if(request.url == '/color-tracker.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/color-tracker.js'));
    } else if(request.url == '/jquery-3.1.0.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/jquery-3.1.0.js'));
    } else if(request.url == '/assets/heart-texture.jpg') {
        response.end(fs.readFileSync('client/assets/heart-texture.jpg'));
    }else if(request.url == '/assets/heart.obj') {
        response.end(fs.readFileSync('client/assets/heart.obj'));
    }else if(request.url == '/assets/car2.obj') {
        response.end(fs.readFileSync('client/assets/car2.obj'));
    } else if(request.url == '/assets/car2.mtl') {
        response.end(fs.readFileSync('client/assets/car2.mtl'));
    }else if(request.url == '/assets/glass.obj') {
        response.end(fs.readFileSync('client/assets/glass.obj'));
    } else if(request.url == '/assets/glass-texture.jpg') {
        response.end(fs.readFileSync('client/assets/glass-texture.jpg'));
    } else if(request.url == '/3d.png') {
        response.end(fs.readFileSync('client/3d.png'));
    } else if(request.url == '/heart.png') {
        response.end(fs.readFileSync('client/heart.png'));
    } else if(request.url == '/car.png') {
        response.end(fs.readFileSync('client/car.png'));
    } else if(request.url == '/glass.jpg') {
        response.end(fs.readFileSync('client/glass.jpg'));
    } else if(request.url == '/close.png') {
        response.end(fs.readFileSync('client/close.png'));
    } else if(request.url == '/spinner.gif') {
        response.end(fs.readFileSync('client/spinner.gif'));
    }


};

var httpsServer = https.createServer(serverConfig, handleRequest);
httpsServer.listen(HTTPS_PORT, '0.0.0.0');

// ----------------------------------------------------------------------------------------

// Create a server for handling websocket calls
var wss = new WebSocketServer({server: httpsServer});

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        // Broadcast any received message to all clients
        console.log('received: %s', message);
        wss.broadcast(message);
    });
});

wss.broadcast = function(data) {
    for(var i in this.clients) {
        this.clients[i].send(data);
    }
};

console.log('Server running. Visit https://localhost:' + HTTPS_PORT + ' in Firefox/Chrome (note the HTTPS; there is no HTTP -> HTTPS redirect!)');
