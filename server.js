const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

// Import all endpoints
const getAllpost = require('./routes/gets');
const newblog = require('./routes/post');
const updataBlog = require('./routes/update');
const deletePost = require('./routes/delete');

// Register and Sign in
const register = require('./controllers/register');
const signin = require('./controllers/signin');

//middleware
const validinfo = require('./middlewares/validinfo')
const authorization = require('./middlewares/authorization')

dotenv.config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOSTNAME,
        user: process.env.USERNAMEPG,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/allpost', (req, res) => {
    getAllpost.showAllBlogs(req, res, db);
});

app.post('/newpost', (req, res) => {
    newblog.postNewBlog(req, res, db);
});

app.put('/updateblog/:blog_id', (req, res) => {
    updataBlog.updatePost(req, res, db);
});

app.delete('/deleteblog/:post_id', (req, res) => {
    deletePost.deleteblog(req, res, db);
})

app.post('/register', validinfo, async (req, res) => {
    const { email } = req.body;

    try {
        const userExist = await db.select('email').from('login').where({ email: email })

        if (userExist.length > 0) {
            return res.json("User already exist")
        }
        register.handleRegister(req, res, db, bcrypt)

    } catch (error) {
        console.error(error.message);
        res.status(400).json("error")

    }
})

app.post('/signin', validinfo, signin.handleSignin(db, bcrypt))

app.get('/isverify', authorization, (req, res) => {
    try {
        res.json(true)
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error")
    }
})

app.get('/data', authorization, async (req, res) => {
    try {
        const user = await db.select('name').from('users').where({ id: req.user })
        // console.log(user);
        res.json(user[0])
    } catch (error) {
        console.error(error.message);
        res.status(500).json('Server Error')
    }
})

app.listen(3001, process.env.URL, () => {
    console.log('>> App is running...');

});