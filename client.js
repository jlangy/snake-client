const net = require('net');
const { IP, PORT} = require('./constants');

const connect = function(){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('connection successful!');
    conn.write("Name: JEL");
    // setInterval(() => {
    //   conn.write("Move: up");
    //   }, 50);
  });


  conn.on('data', (data) => {
    console.log(data);
  });

  conn.setEncoding('utf8');
  return conn;
}

module.exports = { connect };