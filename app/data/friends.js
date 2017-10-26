// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Jason",
    photo: "https://images.contentful.com/0pnkpx3hfneg/1UTu5LX1YUWaoWKeqass8e/4cf9e1eebbf60a2359590b1ca8314c42/Luke-Downey.jpg",
    score: [4,4,4,4,4,4,4,4,4,4],
    total: 40
  },
  {
    name: "John",
    photo: "http://s3-us-west-1.amazonaws.com/com.sfheat.craft/people-portrait-images/_squareCenterCenter300Transform/John_Elder_shoulder.jpg",
    score: [3,3,4,4,5,3,5,5,4,1],
    total: 37
  },
  {
    name: "Mike",
    photo: "http://techcircle.vccircle.com/wp-content/uploads/2015/10/Omid-Kordestani-300x300.jpg",
    score: [4,3,4,4,5,3,1,5,4,1],
    total: 34
  },
  {
    name: "Steve",
    photo: "http://grinkecreative.com/wp-content/uploads/2014/04/DSF5867sm-300x300.jpg",
    score: [3,3,3,3,3,3,3,3,3,3],
    total: 30
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
