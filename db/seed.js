const Joke = require("../models/Joke");

Joke.remove({}).then(() => {
  Promise.all([
    Joke.create({
      title: "Why did the golfer wear 2 pairs of pants?",
      punchline: "In case he got a hole in one"
    }),
    Joke.create({
      title: "Why did Adele cross the road?",
      punchline: "To say hello from the other side"
    })
  ]).then(() => {
    console.log("done");
    process.exit();
  });
});
