// will save data to database here using fakeData

const mongoose = require("mongoose");

// require from dakeData here
const { username, passwords, merchant_names, location, images } = require("./fakeData");

const customerSchema = require("../models/customer");
const merchantSchema = require("../models/merchant");
const productSchema = require("../models/products");
const cartSchema = require("../models/cart")

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

const sample = (array) => array[Math.floor(Math.random() * array.length)];

// let's generate data
const storeDB = async () => {

    await customerSchema.deleteMany({});
    await merchantSchema.deleteMany({});
    await productSchema.deleteMany({});
    await cartSchema.deleteMany({});

    const cus1 = new customerSchema({
        username: 'johndoe4545',
        password: 'dhbvjdhbf',
        first_name: 'John',
        last_name: 'Doe',
        address: 'Los Angeles'
    })
    await cus1.save();

    
    for (let i = 0; i < 10; i++) {
        const merch1 = new merchantSchema({
        username: `${sample(username)}`,
        password: `${sample(passwords)}`,
        name: `${sample(merchant_names)}`,
        location: `${sample(location)}`,
    })
    await merch1.save();
    }

    
// images is a list
    for (var i = 0; i < images.length; i++) {
        object = images[i];
        for (const [key, value] of Object.entries(object)) {
            prodname = key;
            // value is again a list
            for (var j = 0; j < value.length; j++) {
                newUrl = value[j];
                random100 = Math.floor(Math.random() * 5);
                const prod1 = new productSchema({
                    image_url: newUrl,
                    product_name: prodname,
                    price: random100
                })
                await prod1.save();
            }
        
        }
    }

};

storeDB().then(() => {
    mongoose.connection.close();
});