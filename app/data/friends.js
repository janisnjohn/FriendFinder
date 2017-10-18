// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Ahmed",
    photo: "https://pbs.twimg.com/profile_images/706512317165510657/ne8Uf5ot.jpg",
    score: [5,1,4,4,5,1,2,5,4,1],
    total: 32
  },
  {
    name: "John",
    photo: "https://grist.files.wordpress.com/2017/03/seanawatkins.jpg?w=640",
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
    photo: "https://qzprod.files.wordpress.com/2016/02/h_50472570.jpg?quality=80&strip=all",
    score: [4,3,1,4,5,3,1,5,4,1],
    total: 31
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
