const messageGenerator = () => {
  const descriptors = [
    [
      "radiant",
      "beautiful",
      "powerful",
      "kickass",
      "capable",
      "deserving of love",
      "dead sexy",
      "wicked smaht",
    ],
    [
      "conquer your fears",
      "win a million dollars",
      "meet the love of your life",
      "dominate your to-do list",
      "get promoted",
      "find your dream job",
    ],
    [
      "get in your way",
      "stop you",
      "distract you",
      "put you down",
      "keep you from getting what you deserve",
    ],
    [
      "Let's go!",
      "You're a peackock, time to fly!",
      "Onward and upward!",
      "You got this!",
      "Time to level up!",
    ],
  ];
  return `You are ${
    descriptors[0][Math.floor(Math.random() * descriptors[0].length)]
  }. Today you will ${
    descriptors[1][Math.floor(Math.random() * descriptors[1].length)]
  }. Don't let anything ${
    descriptors[2][Math.floor(Math.random() * descriptors[2].length)]
  }. ${descriptors[3][Math.floor(Math.random() * descriptors[3].length)]}`;
};

console.log(messageGenerator());
