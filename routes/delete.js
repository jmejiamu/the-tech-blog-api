const deleteblog = async (req, res, db) => {
    try {
        const { post_id } = req.params;
        const deleteData = await db('newblog').where({ id: post_id }).del()
        res.status(200).send({ response: "deleted!" })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    deleteblog
}

