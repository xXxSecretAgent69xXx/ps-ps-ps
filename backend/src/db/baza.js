const mongoose = require('mongoose');


//najjednostavnije stvaranje baze, "mongodb://127.0.0.1:27017/food" zamjeni sa linkom svoje baze koju napravis na mongo atlas
mongoose.connect( 'mongodb://127.0.0.1:27017/food', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})





