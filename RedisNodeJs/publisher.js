const redis = require("redis");
const client = redis.createClient()

client.on("error", (error) => {
    console.error(error);

});
client.publish("MeteCAPAR" , "app üzerinden gönderilen", (e,number) =>{
    console.log('mesaj ${number} kişiye gönderildi');
});