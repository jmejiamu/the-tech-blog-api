module.exports = (req, res, next) => {

    const { email, name, password } = req.body;

    const validEmail = (userEmail) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === "/register") {

        if (![email, name, password].every(Boolean)) {
            return res.status(401).json({ response: 'Missing Credentials' });

        } else if (!validEmail(email)) {
            return res.status(401).json({ response: "Invalid Email" })
        }
    } else if (req.path === "/signin") {
        if (![email, password].every(Boolean)) {
            return res.status(401).json({ response: "Missing Credential" })
        } else if (!validEmail(email)) {
            return res.status(401).json({ response: "Envalid Email" })
        }
    }
    next();
}