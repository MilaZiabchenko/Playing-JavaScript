const human = {
  name: 'Bogdan',
  interests: ['walking alone', 'looking at the moon'],

  logName() {
    return this.name;
  },
};

human.interests.shift();
human.interests.push('playing with cats');

function surprise(day, drink, location, emotion) {
  return `${day} ${this.logName.call({
    name: 'Bo Star',
  })} who enjoys ${this.interests[0]} and ${
    this.interests[1]
  } surprised me with the most delicious ${drink} in the ${location} :) ${emotion} me! :)`;
}

document.querySelector('p').textContent = surprise.apply(
  human,
  ['yesterday', 'uzvar', 'universe', 'lucky'].map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  )
);

