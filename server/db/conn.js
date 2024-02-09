const mongoose = require("mongoose");

// const DB = `mongodb+srv://Diyar:Asd__200205_tr@diyar.qhyiil5.mongodb.net/mern_user`;

const DB = `mongodb://127.0.0.1:27017/mern`

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DataBase Connected"))
    .catch((err) => {
    console.log(err);
})