const setupInput = function(){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = function(key){
    if(key === 'x'){
      console.log('Game over!');
      process.exit();
    }
}

module.exports = {
  setupInput
}