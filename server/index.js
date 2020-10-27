const express = require("express");
const config = require("./config");
const app = express();
const mongoose = require("mongoose");
const shortRouter = require("./router/shortRouter");

const run = async () => {
    try {
        await mongoose.connect("mongodb://localhost/short_url",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
    } catch (error) {
        console.log(error);
    }

    app.use(express.json());

    app.use("/shortUrl", shortRouter);

    app.listen(config.port, () => {
        console.log(`Server started on ${config.port} port.`);
    });

    process.on("exit", () => {
        mongoose.disconnect();
    });
};
run();