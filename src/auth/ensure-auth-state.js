export const ensureAuthState = (req, res, next) => {
  console.log('this request may not be authenticated one ')
  console.log('checking to ensure that the user sending this request is authenticated')
  next();
}

export const ensureUserIsAdmin = (req, res, next) => {
  console.log('the user accessing this endpoint has to be a selle')
  console.log('checking if user is a seller')
  next();
}