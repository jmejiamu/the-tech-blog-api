const jwt = require('jsonwebtoken');

const secret_key = 'SECRET_KEY_THE_TECH_BLOG';

const maxAge = 45 * 60;

const createToken = (id) => {
    const payload = {
        user: id
    }

    return jwt.sign(payload, secret_key, { expiresIn: maxAge });
}

const handleRegister = (req, res, db, bcrypt) => {

    const { email, name, password, picture } = req.body;

    const salt = 10;
    const hash = bcrypt.hashSync(password, salt)

    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
            .into('login')
            .returning('email')
            .then(logninEmail => {
                return trx('users')
                    .returning('*')
                    .insert({
                        email: email,
                        name: name,
                        picture: picture
                    })
                    .then(user => {
                        const token = createToken(user[0].id)

                        return res.status(200).json({ token })
                    })
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
        .catch(err => res.status(400).json({ response: 'Unable to register' }))
}

module.exports = {
    handleRegister: handleRegister
}