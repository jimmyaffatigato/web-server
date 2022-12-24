import express from "express";
import path from "path";

export default class Server {
    constructor(publicPath: string, port: number = 80) {
        const app = express();
        publicPath = path.resolve(publicPath);
        app.use(express.static(publicPath));

        app.get("/", (req, res) => {
            const filePath = path.resolve(publicPath, "index.html");
            res.sendFile(filePath);
        });

        app.listen(port, () => {
            console.log(`${publicPath}`);
            console.log(`Listening on ${port}`);
        });
    }
}
