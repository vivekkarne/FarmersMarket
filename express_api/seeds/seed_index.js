// will save data to database here using fakeData

const mongoose = require("mongoose");

// require from dakeData here

const customerSchema = require("../models/customer");
const merchantSchema = require("../models/merchant");
const productSchema = require("../models/products");

mongoose.connect("mongodb://localhost:27017/trojan-hacks", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// let's generate data
const storeDB = async () => {

    await customerSchema.deleteMany({});
    await merchantSchema.deleteMany({});
    await productSchema.deleteMany({});

    const cus1 = new customerSchema({
        username: 'johndoe4545',
        password: 'dhbvjdhbf',
        first_name: 'John',
        last_name: 'Doe',
        address: 'Los Angeles'
    })
    await cus1.save();

    const merch1 = new merchantSchema({
        username: 'merchant13244',
        password: 'fmghei546',
        name: 'Merchant One',
        location: 'Los Angeles, CA',
    })
    await merch1.save();

    const prod1 = new productSchema({
        product_name: 'carrot',
        quatity_left: 40
    })
    await prod1.save();

};

storeDB().then(() => {
    mongoose.connection.close();
});