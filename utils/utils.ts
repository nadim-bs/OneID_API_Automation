import {test, request} from "@playwright/test";
import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

export function reloadEnv(){
    dotenv.config({override:true});
}

export function saveEnvVar(key:string, value:string, envFilePath?:string):void{
    const envPath = envFilePath || path.resolve(__dirname, "..",".env");
    const newLine = `${key}=${value}`;
    const exists = fs.existsSync(envPath);
    let content = exists ? fs.readFileSync(envPath, "utf-8") : "";

    // update or add the key, value
    content = content.match(new RegExp(`^${key}=`, "m"))
     ? content.replace(new RegExp(`^${key}=.*`, "m"), newLine)
     : `${content.trim()}\n${newLine}\n`;
     
     fs.writeFileSync(envPath, content.trim() + "\n", "utf-8")
     console.log(`saved ${key} to ${envPath}`);
}



