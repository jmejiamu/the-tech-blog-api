const updatePost = async (req, res, db) => {
    try {
        const { blog_id } = req.params;
        const { title, author, context } = req.body;

        const updateData = await db('newblog').update({ title, author, context }).where({ id: blog_id })
        res.status(200).send({ response: "update" })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    updatePost
}