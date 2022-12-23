module.exports = {
    async create(req, res) {
        try {
            const { q } = req.query;
            console.log(q)
            return res.status(200).json({ q })
        } catch (err) {
            console.error(err)
        }
    }
}