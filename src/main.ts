import WebServer from "./WebServer";
import { version } from "../package.json";

console.log(`Web Server ${version} by Jimmy. NOT SAFE FOR PRODUCTION.`);

const command = process.argv[2];

if (command == "-h" || command == "-help") {
    console.log(`Host a directory on this machine.`);
    console.log(`For local testing, NOT SAFE FOR PRODUCTION.`);
    console.log(`Provide the public path and optionally a port number. Default port is 80 (requires root).`);
} else {
    const PUBLIC = command;
    const PORT = Number(process.argv[3]) || 80;

    if (!PUBLIC) {
        console.error("Provide a public folder path.");
    } else {
        const server = new WebServer(PUBLIC, PORT);
    }
}
