const jwt = require('jsonwebtoken');

const secret_key = 'SECRET_KEY_THE_TECH_BLOG';

//Expired time for the jsonwebtoken
const maxAge = 45 * 60;

// Creating token
const createToken = (id) => {
    const payload = {
        user: id
    }
    return jwt.sign(payload, secret_key, { expiresIn: maxAge });
}

// Sign in
const handleSignin = (db, bcrypt) => (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ response: 'Incorrect data' })
    }

    db.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {

            //decrypting password
            const isValid = bcrypt.compareSync(password, data[0].hash);

            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', email)
                    .then(user => {
                        const token = createToken(user[0].id)
                        res.json({ token })
                    })
                    .catch(err => res.status(400).json({ respose: 'Unable to get user' }))
            } else {
                res.status(401).json({ response: 'wrong credential' })
            }
        })
        .catch(err => res.status(400).json({ response: 'Unable to get user' }))

}

module.exports = {
    handleSignin: handleSignin
}
