const mongoose = require("mongoose");

const DB = `mongodb+srv://Diyar:Asd__200205_tr@diyar.qhyiil5.mongodb.net/mern`

mongoose.connect(DB)
    .then(() => console.log("DataBase Connected"))
    .catch((err) => {
        console.log(err);
    })
