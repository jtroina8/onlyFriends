const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { User } = require("./models");


const initialize = (passport, userName, getUserById) => {
  const authenticateUser = async (userName, password, done) => {
    const user = await User.findOne( {where: { userName: userName }});
    if (user == null) {
      return done(null, false, { message: "No user with that username found" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  }
  passport.use(new localStrategy(authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((user, done) => {
    return done(null, user);
  });
}

module.exports = initialize;