var LISTEN_PORT = 4000;

    var express = require('express');
    var body_parser = require('body-parser');

    var app = express();

    /*app.use(body_parser.urlencoded({extended: true}));*/
    app.use(body_parser.json({extended: true, limit: '50mb'}));

    /* Public client */
    app.use('/', express.static(__dirname));



    /* API */




    /* Utente */
  /*  router.route('/utente/:action?/:id?')
          .get(client_bearer.auth, utente_controller.execute)
          .put(client_bearer.auth, utente_controller.execute);*/



    var server = app.listen(LISTEN_PORT);

//}
