const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ status: 'Failed', data: 'Access Denied' });
  }

  jwt.verify(token, 'M416', (err, decoded) => {
    if (err) {
      return res.status(403).json({ status: 'Failed', data: 'Invalid Token' });
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = verifyToken;
