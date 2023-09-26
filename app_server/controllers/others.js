module.exports.about = (req, res) => {
    res.render('about')
}

module.exports.ContactPage = (req, res) => {
    res.render('contact')
}

module.exports.getLogin = (req, res) => {
    res.render('login')
}

module.exports.getRegistration = (req, res) => {
    res.render('signup')
}