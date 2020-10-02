function longestLogin(loginList) {
  let longest = loginList.reduce((a, b) => (a.length > b.length ? a : b), '');
  return longest;
}
// Function examples:
longestLogin(['serg22', 'tester_2', 'Prokopenko', 'guest']); //  Prokopenko
longestLogin(['user1', 'user2', '333', 'user4', 'aa']); //  user4
