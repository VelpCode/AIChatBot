import { config } from "dotenv"

config()

import {Configuration, OpenAIApi } from "openai"

console.log(process.env.API_KEY)


const dude = "Dude message";

console.log(dude.__proto__);