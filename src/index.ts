import { Client, Message } from "discord.js"
import { config } from "dotenv"

config()

const client = new Client()

const commands = ["add", "remove"]
let currentList: string[] = []

const addPlayerToList = (message: Message) => {
    const newMembers = message.content.split("$add")[1].split(",").map(memberString => memberString.trim())
    currentList = [...currentList, ...newMembers]

    message.reply(`
        Current List: ${currentList.join(`\n-`)}
    `)
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })
  
  client.on("message", msg => {
    if(msg.content.startsWith("$add")) {
        addPlayerToList(msg)
    }
  })

client.login(process.env.TOKEN)