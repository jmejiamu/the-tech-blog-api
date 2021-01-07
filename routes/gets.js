const showAllBlogs = async (req, res, db) => {
    try {
        const data = await db.select('*').from('newblog').orderBy('id', 'desc');
        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
};
const showAllComments = async (req, res, db) => {
    try {
        const data = await db.select('*').from('comments').orderBy('id', 'desc');
        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
};



module.exports = {
    showAllBlogs,
    showAllComments
}
