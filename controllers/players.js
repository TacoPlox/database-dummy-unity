const {Player} = require('./../models/player');

let controller = {};

//Configurar funciones del controlador
controller.list = (req, res, next) => {
    //() => {}
    //no se permite "this"

    //req -> Request
    //res -> Response
    //next -> (Funciones adicionales)
    // res.send('Player list');

    // let players = [
    //     {
    //         name: 'Player 1'
    //     },
    //     {
    //         name: "Player 2"
    //     }
    // ];

    //find => consultar registros
    Player.find( (err, players) => {
        if (err) {
            console.log('Error trying to query Players', err);
            return res.json([]);
        }
        return res.json(players);
    } );

    //Aqui no va
};

//Exportar
module.exports = controller;