const passport = require('passport')

module.exports = (app) => {
    app.get('/logout', (req, res) => [req.session.destroy(), req.logout()]),
    app.get('/login', (req, res) => res.redirect('https://www.fidlervp.com')),
    app.post('/saml/callback',
        passport.authenticate('saml', {
            failureRedirect: '/error', 
            failureFlash: true
        }),
        function(req, res) {
            res.redirect('https://www.fidlervp.com');
        }
    )
}