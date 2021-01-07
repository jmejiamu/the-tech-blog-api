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
module.exports = {
    postNewBlog,
    postComment
}