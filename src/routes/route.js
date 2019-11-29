const MessageController = require('../Controller/MessageController').MessageController;

const router = function (app) {

    app.route('/').get(function (req, res) {
        res.send('Hello there !');
    });

    app.route('/api/messages')
        .get(function(req, res) {
            res.send({status:200});
        })
        .post(MessageController.addMessage);

    app.route('/api/messages/:id')
        .get(function(req, res) {
            res.send({
                status:200,
                id: req.params.id
            });
        })
        .put(function (req, res) {
            res.send({
                status:200,
                id: req.params.id
            });
        })
        .delete(function (req, res) {
            res.send({
                status:200,
                id: req.params.id
            });
        });
};

module.exports = router;
