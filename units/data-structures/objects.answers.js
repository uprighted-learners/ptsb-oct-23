// & Challenge #1:
// - Create a new object with 3 properties, separately add a new property
// - Nest an array with 1 object in your object with 2 properties
// - Delete one of the properties in your array's nested object using dot notation and bracket for the other

// ! Answer
const dog = {
  sheds: true,
  ears: 2,
  feet: 4,
  favoriteActivites: [{ bark: true, zoomies: true }],
};

dog.fuzzy = 'very fuzzy';

delete dog.favoriteActivites[0].bark;
delete dog.favoriteActivites[0][zoomies];

/////////////////////////

// & Challenge #2:
// - Create a new object with a nested object
// - Nest another object inside the first nested object named "party" with the property "dinner" set to true and "friends" set to 9
// - Loop over your lowest nested object and log the key/value for only "friends"
//
// Extra credit
// - There is hard to read, use variables to simplify the code for readability
// - Use a ternary if you have not already

// ! Answer
const holidays = {
  total: 3,
  names: ['birthday', 'valentines day', 'thanksgiving'],
  celebrationTypes: {
    fireworks: true,
    dance: false,
    party: {
      dinner: true,
      friends: 9,
    },
  },
};

for (const type in holidays.celebrationTypes) {
  if (
    type === 'party' &&
    holidays.celebrationTypes.party &&
    holidays.celebrationTypes.party.friends
  ) {
    console.log('friends', holidays.celebrationTypes[type].friends);
  }
}

// Extra credit
const celebrationTypes = holidays.celebrationTypes;

for (const type in celebrationTypes) {
  if (
    type === 'party' &&
    celebrationTypes.party &&
    celebrationTypes.party.friends
  ) {
    console.log('friends', celebrationTypes[type].friends);
  }
}

/////////////////////////

// & Challenge #3:
// * Imagine Netflix storing information in their database about a show and its' seasons/episodes.
//
// Requirements:
// - Add season 3 including an episode count and episode info property
// - Don't change initial netflix object, create your own
// - The data structure should match the previous seasons design
// - Access and log your new season, number of episodes, and episode info (as an array) using 3 separate logs.
// - Use dot notation.
//
// Extra credit:
// - Add a totalSeasons property with a dynamic count value if more seasons were added
// -- This will require looking ahead to the object-methods.js lesson or exploring MDN for a method that can help us
// -- Come back to the extra credit later if unable to solve yet

let netflix = {
  id: 9,
  likes: 932,
  name: 'The Good Place',
  seasonInfo: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        { episode: 1, episodeName: 'Pilot' },
        { episode: 2, episodeName: 'Flying' },
        { episode: 3, episodeName: 'Tahani Al-Jamil' },
        { episode: 4, episodeName: 'Jason Mendoza' },
        { episode: 5, episodeName: 'Category 55 Emergency' },
      ],
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo: [
        { episode: 1, episodeName: 'Everything is Great' },
        { episode: 2, episodeName: 'Dance Dance Resolution' },
        { episode: 3, episodeName: 'Team Cockroach' },
        { episode: 4, episodeName: 'Existential Crisis' },
        { episode: 5, episodeName: 'The Trolley Problem' },
      ],
    },
  },
  isAvailable: true,
};

// ! Answer
netflix.seasonInfo.season3 = {
  episodeInfo: [
    { episode: 1, episodeName: 'Something' },
    { episode: 2, episodeName: 'Something else' },
  ],
};

netflix.seasonInfo.season3.numberOfEpisodes =
  netflix.seasonInfo.season3.episodeInfo.length;

console.log(netflix.seasonInfo.season3);

// Extra credit
netflix.totalSeason = Object.keys(netflix.seasonInfo).length;
console.log(netflix);
