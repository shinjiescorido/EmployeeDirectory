module.exports = function(app) {
    app.post('/notif', function(req, res) {
        res.render('notif/notif');
    });
}