let connection;

const KEYS = require('./constants').KEY_BINDINGS;

const setupInput = function(conn){
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = function(key){
    for(keyAction of Object.keys(KEYS)){
      if(key === keyAction){
        connection.write(KEYS[keyAction]);
      }
    }
    if(key === 'x'){
      console.log('Game over!');
      process.exit();
    }
}

module.exports = {
  setupInput
}