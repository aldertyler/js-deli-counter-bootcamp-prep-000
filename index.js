var katzDeli = [];
function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(`${newCustomer}`);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var firstInLine = deliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
}

<<<<<<< HEAD


function currentLine(katzDeli) {
  var line = [];
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` ` + [i+1] + `. ` + katzDeli[i]);
    i++;
}
  if (katzDeli.length === 0) {
    return `The line is currently empty.` }
  else {
    return `The line is currently:` + line;
  }
}
=======
function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      line.push(`${i+1}. ${katzDeliLine[i]}` + " " );
    }
    return `The line is currently: ${line}`;
  }
}
>>>>>>> 7efc117ca61db16a71dbf410b6f066eee677f805
