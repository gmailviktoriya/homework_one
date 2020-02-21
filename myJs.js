for(var i = "#"; i.length < 7; i+="#"){
  console.log(i)
}

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } 
  else {
    console.log(i);
  }
}

function countChar(string, ch){
	var result = 0;
	for (var i = 0; i < string.length; i++)
	{
		if (string[i] == ch)
			result++;
	}
	return result;
}
console.log(countChar('BBBBfg', 'B'));

var myName = "Ник";
console.log(myName[0]);
myName[1];
myName[2];