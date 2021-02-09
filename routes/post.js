const postNewBlog = async (req, res, db) => {
    try {
        const { title, author, context } = req.body;
        const data = await db
            .insert({
                title: title,
                author: author,
                context: context
            })
            .into('newblog')
        res.status(200).send({ response: "INSERTED" })
    } catch (error) {
        console.error(error.message);
    }

}
const postComment = async (req, res, db) => {
    try {
        const { comment, newblog_id, username, useremail } = req.body;
        const data = await db
            .insert({
                comment: comment,
                newblog_id: newblog_id,
                username: username,
                useremail: useremail,

            })
            .into('comments')
        res.status(200).send({ response: "INSERTED" })
    } catch (error) {
        console.error(error.message);
    }
}

const addABook = async (req, res, db) => {
    try {
        const { book_title, book_description, book_cost, book_url } = req.body;
        const data = await db
            .insert({
                book_title: book_title,
                book_description: book_description,
                book_cost: book_cost,
                book_url: book_url
            })
            .into('books')
        res.status(200).send({ response: "data inserted" })
    } catch (error) {
        console.error(error.message);
    }
}

const userBook = async (req, res, db) => {
    try {
        const { book_title, book_description, book_cost, book_url, user_email, book_id } = req.body;
        const data = await db
            .insert({
                book_title: book_title,
                book_description: book_description,
                book_cost: book_cost,
                book_url: book_url,
                user_email: user_email,
                book_id: book_id
            })
            .into('user_book')
        res.status(200).send({ response: "data inserted" })
    } catch (error) {
        console.error(error.message);
    }
}
module.exports = {
    postNewBlog,
    postComment,
    addABook,
    userBook
}