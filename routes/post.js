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
        res.status(200).send({ post: "INSERTED" })
    } catch (error) {
        console.error(error.message);
    }

}

module.exports = {
    postNewBlog
}