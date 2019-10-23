// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that ?
// Which meal is your favourite(eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite ?
// What is your superpower ? In a few words, tell us what you are amazing at!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question(
  "1- What's your name? Nicknames are also acceptable :) ",
  answer => {
    //console.log(`Thank you for your valuable feedback: ${answer}`);
    answers.push(answer);

    rl.question("2- What's an activity you like doing? ", answer => {
      //console.log(`Thank you for your valuable feedback: ${answer}`);
      answers.push(answer);

      rl.question("3- What do you listen to while doing that? ", answer => {
        //console.log(`Thank you for your valuable feedback: ${answer}`);
        answers.push(answer);

        rl.question(
          "4- Which meal is your favourite (eg: dinner, brunch, etc.) ",
          answer => {
            //console.log(`Thank you for your valuable feedback: ${answer}`);
            answers.push(answer);

            rl.question(
              "5- What's your favourite thing to eat for that meal? ",
              answer => {
                //console.log(`Thank you for your valuable feedback: ${answer}`);
                answers.push(answer);

                rl.question(
                  "6- Which sport is your absolute favourite? ",
                  answer => {
                    //console.log(`Thank you for your valuable feedback: ${answer}`);
                    answers.push(answer);

                    rl.question(
                      "7- What is your superpower? In a few words, tell us what you are amazing at! ",
                      answer => {
                        //console.log(`Thank you for your valuable feedback: ${answer}`);
                        answers.push(answer);
                        console.log(
                          `${answers[0]} loves listening to ${
                            answers[2]
                          } while ${answers[1]}, devouring ${answers[4]} for ${
                            answers[3]
                          }, prefers ${
                            answers[5]
                          } over any other sport, and is amazing at ${
                            answers[6]
                          }.`
                        );

                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
