module.exports = {
    isValid,
  };
  
  // function isValid(user) {
  //   return Boolean(user.username && user.password && typeof user.password === "string");
  // }

  function isValid(user) {
    return Boolean(user.FirstName && user.LastName && user.Email && user.password && typeof user.password === "string");
  }