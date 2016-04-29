var cardrouter = function (router, api) {

    /* GET users listing. */
    router.get('/', function (req, res, next) {
        res.json({ "msg": 'standby' })
    });

    router.post("/card/createCard", function (req, res, next) {
        var card = req.body
        api.createCard()
    })

}

modules.export= cardrouter