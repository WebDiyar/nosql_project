const mongoose = require("mongoose");

// const DB = `mongodb+srv://Diyar:Asd__200205_tr@diyar.qhyiil5.mongodb.net/mern_user`;
const DB = process.env.DATABASE

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DataBase Connected"))
    .catch((err) => {
    console.log(err);
})