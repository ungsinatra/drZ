var name = prompt(
  "DR.Z\nCREATIVE COMPUTING\nMORRISTOWN, NEW JERSEY\n\n\nHELLO THERE, I'M YOUR COMPUTER THERAPIST.\nWHAT IS YOUR NAME? AND TELL ME SOMETHING ABOUT YOURSELF.\nHOWEVER, DON'T TYPE MORE THAN ONE LINE. I TIRE EASILY."
);
var response = prompt("WHAT DID YOU SAY YOUR NAME WAS AGAIN?");
response = prompt("HOW DO YOU FEEL TODAY?");
var c = 0;
while (c < 10) {
  var z = Math.floor(Math.random() * 10);

  switch (z) {
    case 0:
      response = prompt("THAT'S VERY INTERESTING, TELL ME MORE.");
      break;
    case 1:
      response = prompt("HAVE YOU FELT THIS WAY LONG?");
      break;
    case 2:
      response = prompt(
        "DO YOU THINK THIS IS REASONABLE IN LIGHT OF YOUR INTERESTS?"
      );
      break;
    case 3:
      response = prompt("DO YOUR FRIENDS FIND THIS ACCEPTABLE?");
      break;
    case 4:
      response = prompt("DO YOU FEEL COMFORTABLE WITH THIS FEELING?");
      break;
    case 5:
      response = prompt("DO YOU THINK THAT THIS IS A NORMAL FEELING?");
      break;
    case 6:
      response = prompt("WHY DO YOU THINK YOU FEEL THIS WAY?");
      break;
    case 7:
      response = prompt("HAVE YOU TALKED TO ANYONE ABOUT THIS?");
      break;
    case 8:
      response = prompt("WHY ARE YOU HERE?");
      break;
    case 9:
      response = prompt(
        "ARE YOU SATISFIED WITH THE WAY YOUR IDEAS ARE DEVELOPING?"
      );
      break;
  }

  c++;
}

response = prompt(
  "I THINK YOU ARE MAKING A GREAT ATTEMPT TO SOLVE YOUR DIFFICULTIES, AND I SEE NO NEED TO CONTINUE THIS SESSION ANY FURTHER. " +
    name +
    " WOULD YOU MAKE ANOTHER APPOINTMENT WITH MY COMPUTER FOR SOMETIME IN THE NEXT FEW WEEKS. WHAT DATE WOULD YOU PREFER?"
);

alert(
  "THAT WILL BE FINE.\nI'VE ENJOYED COMMUNICATING WITH YOU.\nHAVE A NICE DAY."
);
