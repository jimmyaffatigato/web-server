import Server from "./Server";

const PORT = Number(process.argv[3]) || 80;
const PUBLIC = process.argv[2];

if (!PUBLIC) {
    console.error("Provide a public folder path.");
} else {
    const server = new Server(PUBLIC, PORT);
}
