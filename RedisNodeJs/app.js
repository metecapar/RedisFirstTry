const redis = require("redis");
const client = redis.createClient()

client.on("error", (error) => {
    console.error(error);

});


//set
client.set("user_name", "mete", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("Message", message)
});



//get
client.get("user_name", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("Message", message)
});


//delete
client.del("user_name", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("Delete", message)
});



//exist
client.exists("user_name", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("exits", message)
});


//apend
client.append("last_name", "CAPAR", (error, message) => {
    if (error) {
        console.error(error);
    }
    console.log("Append", message)
    console.log(client.get("last_name", (e, m) => {
        console.log("Okunan", m);
    }));
});

client.on("message", (channel, message) => {
    console.log('${channel} isimli kanala ${message} geldi..');
});
client.subscribe("MeteCAPAR");
