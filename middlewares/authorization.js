const jwt = require('jsonwebtoken');

const secret_key = 'SECRET_KEY_THE_TECH_BLOG';

module.exports = async (req, res, next) => {
    const token = req.header("token")

    //No token
    if (!token) {
        return res.status(403).json({ msg: "Authorization denied" })
    }

    // Verify Token

    try {
        // it is going to give us the user id (user:{id: user.id})

        const verify = jwt.verify(token, secret_key)

        req.user = verify.user;
        next();

    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}
