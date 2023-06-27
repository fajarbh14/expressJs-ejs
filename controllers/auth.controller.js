const supabase = require('../database')
const bcrypt = require('bcryptjs');
module.exports = {
    index: (req, res) => {
        if (req.session.loggedIn) return res.redirect('/')
        const title = 'Masuk'
        res.render('login', { title });
    },
    login: async (req, res) => {
    },
    logout: async (req, res) => {
        req.session.destroy();
        return res.redirect('/login')
    }
}
