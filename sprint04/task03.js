// Implement the getAge() function to get user age. To find his age you need to call a getUser() async function that return a user object in format {role: "somerole", id: 1}. To get the actual user info you need to call another function getUserProfile(id), that uses id returned from the previous function and return user info as an object
// {name: "Petro", age: 15}. The getAge() must return the age of the user.

const { getUser, getUserProfile } = require('./Helper.js');

async function getAge() {
  const user = await getUser();
  const userObj = await getUserProfile(user.id);

  return userObj.age;
}
