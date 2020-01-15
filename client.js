const net = require('net');

const connect = function(){
  const conn = net.createConnection({
    host: '10.0.13.4',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('connection successful!');
    conn.write("Name: JEL");
    // setInterval(() => {
    //   conn.write("Move: up");
    //   }, 50);
    // });

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.setEncoding('utf8');

  return conn;
}

module.exports = connect;