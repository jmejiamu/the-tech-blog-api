const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');
const dotenv = require('dotenv');

// Import all endpoints
const getAllpost = require('./routes/gets');
const newblog = require('./routes/post');
const updataBlog = require('./routes/update');
const deletePost = require('./routes/delete');

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

app.listen(3001, process.env.URL, () => {
    console.log('>> App is running...');

});