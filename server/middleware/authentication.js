const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports.signToken = data => {
    const jwt_token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
    return { ...data, jwt_token };
};

module.exports.verifyJWT = async (req, res, next) => {
    const header = req.headers.authorization;
    const token = header && header.startsWith("Bearer ") ? header.split(' ')[1] : null;
    
    if (!token) return res.status(401).json({ response: 'fail', message: 'Token not found' });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ response: 'fail', message: 'Token Expired' });
        req.user = user;
        return next()
    })
}