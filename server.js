var mqtt = require('mqtt');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/app'));
app.get('/', function(req, res,next) {
  res.sendFile(__dirname + '/app/index.html');
});


// Emit welcome message on connection
io.on('connection', function(socket) {
  // Use socket to communicate with this particular client only, sending it it's own id
  //socket.emit('mqtt', { message: message.toString(), id: socket.id });
  client.subscribe(MQTT_TOPIC);
});



var MQTT_TOPIC          = "pgomapcatch/#";
var MQTT_ADDR           = "mqtt://test.mosca.io";
var MQTT_PORT           = 1883;

/* This is not working as expected */
//var client = mqtt.connect({host: MQTT_ADDR, port:MQTT_PORT},{clientId: 'bgtestnodejs'});

/* This works... */
var client  = mqtt.connect(MQTT_ADDR,{protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});



//Send message: client.publish(MQTT_TOPIC, 'Hello mqtt');
client.on('connect', function () {
  client.subscribe(MQTT_TOPIC);
});

client.on('message', function (topic, message) {
  // message is Buffer
  io.sockets.emit('mqtt', { message: message.toString(), topic: topic });
});

client.on('error', function(){
  client.end()
});

server.listen(3000);