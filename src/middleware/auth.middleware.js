
export const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId && req.session.authenticated) {
    return next();
  }
  res.redirect('/login');
};

export const setLocals = (req, res, next) => {
  if (req.session && req.session.userId) {
    res.locals.isAuthenticated = true;
    res.locals.userId = req.session.userId;
    res.locals.userRole = req.session.userRole;
    res.locals.firstName = req.session.firstName;
  }
  next();
};