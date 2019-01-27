module.exports = (req, res, next) => {
  if (!req.user.credits) {
    res.status(403).send({ error: "User must have at least one credit"})
  }
  
  next()
}