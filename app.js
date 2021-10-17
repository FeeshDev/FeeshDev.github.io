const express = require("express");
const http = require("http");

const fs = require("fs");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.get("/status", function (req, res) {
    res.send("ok");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.use("/", express.static(path.resolve(__dirname, "public")));
app.get("/mopeui/script.js", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(`${fs.readFileSync(path.resolve(__dirname, "extra", "gameioclient.js"), "utf8")} ${fs.readFileSync(path.resolve(__dirname, "extra", "uimanager.js"), "utf8")} ${fs.readFileSync(path.resolve(__dirname, "extra", "main.js"), "utf8")}`);
});

server.listen(process.env.PORT || 2000, () => {
    if (process.env.PORT) {
        console.log("Server started successfully.")
    } else {
        console.log("Server started successfully at on port 2000.");
    }
});