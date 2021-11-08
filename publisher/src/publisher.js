
const mqtt = require('mqtt')
const client = mqtt.connect(`mqtt://${process.env.HOST}:${process.env.PORT}`)
const topic = process.env.TOPIC
const message = JSON.stringify({
  message: 'Hello'
})

setInterval(() => {
  client.publish(topic, message)
}, 100)
