// alternative to wrapping server code in try/catch
module.exports = funky => {
    return (req, res, next) => {
        funky(req, res, next).catch(next);
    }
}
