#include <stdio.h>
#include <stdlib.h>

int main(void)
{

  printf("\tDR.Z\n");
  printf("\tCREATIVE COMPUTING\n");
  printf("\tMORRISTOWN, NEW JERSEY\n\n\n");

  printf("HELLO THERE, I'M YOUR COMPUTER THERAPIST.\n");
  printf("WHAT IS YOUR NAME? AND TELL ME SOMETHING ABOUT YOURSELF.\n");
  printf("HOWEVER, DON'T TYPE MORE THAN ONE LINE. I TIRE EASILY.\n");

  char name[50];
  scanf("%s", name);

  printf("WHAT DID YOU SAY YOUR NAME WAS AGAIN?\n");
  scanf("%s", name);

  printf("HOW DO YOU FEEL TODAY?\n");

  int c = 0, u = 0, v = 0;
  char response[50];
  scanf("%s", response);

  while (c < 10)
  {
    int z = rand() % 10;
    if (u == z)
      continue;
    if (v == z)
      continue;
    u = z;

    switch (z)
    {
    case 0:
      printf("THAT'S VERY INTERESTING, TELL ME MORE.\n");
      break;
    case 1:
      printf("HAVE YOU FELT THIS WAY LONG?\n");
      break;
    case 2:
      printf("DO YOU THINK THIS IS REASONABLE IN LIGHT OF YOUR INTERESTS?\n");
      break;
    case 3:
      printf("DO YOUR FRIENDS FIND THIS ACCEPTABLE?\n");
      break;
    case 4:
      printf("DO YOU FEEL COMFORTABLE WITH THIS FEELING?\n");
      break;
    case 5:
      printf("DO YOU THINK THAT THIS IS A NORMAL FEELING?\n");
      break;
    case 6:
      printf("WHY DO YOU THINK YOU FEEL THIS WAY?\n");
      break;
    case 7:
      printf("HAVE YOU TALKED TO ANYONE ABOUT THIS?\n");
      break;
    case 8:
      printf("WHY ARE YOU HERE?\n");
      break;
    case 9:
      printf("ARE YOU SATISFIED WITH THE WAY YOUR IDEAS ARE DEVELOPING?\n");
      break;
    }

    scanf("%s", response);
    c++;
  }

  printf("I THINK YOU ARE MAKING A GREAT ATTEMPT TO SOLVE YOUR DIFFICULTIES, AND I SEE NO NEED TO CONTINUE THIS SESSION ANY FURTHER.\n");
  printf("%s WOULD YOU MAKE ANOTHER APPOINTMENT WITH MY COMPUTER FOR SOMETIME IN THE NEXT FEW WEEKS. WHAT DATE WOULD YOU PREFER?\n", name);
  scanf("%s", response);
  printf("THAT WILL BE FINE.\n");
  printf("I'VE ENJOYED COMMUNICATING WITH YOU.\n");
  printf("HAVE A NICE DAY.\n\n\n\n\n\n");

  return 0;
}