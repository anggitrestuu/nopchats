import { io } from "socket.io-client"

const socket = io("http:/localhost:3030")

socket.connect()

socket.on("connect", () => {
  console.log("Connected to server")
})

export { socket }
