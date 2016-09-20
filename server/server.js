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
    } else if(request.url == '/3dmodel.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/3dmodel.js'));
    }else if(request.url == '/3dmodel2.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/3dmodel2.js'));
    }else if(request.url == '/3dmodel3.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/3dmodel3.js'));
    }else if(request.url == '/3dmodel4.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/3dmodel4.js'));
    }else if(request.url == '/3dmodel5.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/3dmodel5.js'));
    }else if(request.url == '/3dmodel6.js') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(fs.readFileSync('client/3dmodel6.js'));
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
    } else if(request.url == '/assets/female-croupier-2013-03-26.mtl') {
        response.end(fs.readFileSync('client/assets/female-croupier-2013-03-26.mtl'));
    } else if(request.url == '/assets/female-croupier-2013-03-26.obj') {
        response.end(fs.readFileSync('client/assets/female-croupier-2013-03-26.obj'));
    } else if(request.url == '/assets/female-croupier-2013-03-26.png') {
        response.end(fs.readFileSync('client/assets/female-croupier-2013-03-26.png'));
    } else if(request.url == '/assets/UV_Grid_Sm.jpg') {
        response.end(fs.readFileSync('client/assets/UV_Grid_Sm.jpg'));
    } else if(request.url == '/assets/heart-texture-1.jpg') {
        response.end(fs.readFileSync('client/assets/heart-texture-1.jpg'));
    } else if(request.url == '/assets/heart-texture-2.jpg') {
        response.end(fs.readFileSync('client/assets/heart-texture-2.jpg'));
    } else if(request.url == '/assets/heart-texture-3.jpg') {
        response.end(fs.readFileSync('client/assets/heart-texture-3.jpg'));
    } else if(request.url == '/assets/dna_texture_1.jpg') {
        response.end(fs.readFileSync('client/assets/dna_texture_1.jpg'));
    } else if(request.url == '/assets/male02.obj') {
        response.end(fs.readFileSync('client/assets/male02.obj'));
    } else if(request.url == '/assets/heart.obj') {
        response.end(fs.readFileSync('client/assets/heart.obj'));
    } else if(request.url == '/assets/dna.obj') {
        response.end(fs.readFileSync('client/assets/dna.obj'));
    } else if(request.url == '/assets/car1.obj') {
        response.end(fs.readFileSync('client/assets/car1.obj'));
    } else if(request.url == '/assets/car1.mtl') {
        response.end(fs.readFileSync('client/assets/car1.mtl'));
    } else if(request.url == '/assets/car2.obj') {
        response.end(fs.readFileSync('client/assets/car2.obj'));
    } else if(request.url == '/assets/car2.mtl') {
        response.end(fs.readFileSync('client/assets/car2.mtl'));
    } else if(request.url == '/assets/car4.obj') {
        response.end(fs.readFileSync('client/assets/car4.obj'));
    } else if(request.url == '/assets/car4.mtl') {
        response.end(fs.readFileSync('client/assets/car4.mtl'));
    } else if(request.url == '/assets/car3.obj') {
        response.end(fs.readFileSync('client/assets/car3.obj'));
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
