const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const initialize = (passport, getUserByUserName) => {
  const authenticateUser = (userName, password, done) => {
    const user = getUserByUserName(userName);
    if (user == null) {
      return done(null, false, { message: "No user with that username found" });
    }

    try {
      if (await bcrypt.compare(password, newUser.password)) {
        return done(null, newUser);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  }

  passport.use(new localStrategy({usernameField: "userName"}), authenticateUser);
  passport.serializeUser((user, done) => { });
  passport.deserializeUser((id, done) => { });
}

module.exports = initialize;