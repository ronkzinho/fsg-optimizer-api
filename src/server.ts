import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/generators", (_, res) => {
    //the sources of the generators are https://replit.com/@ronkzin/(name of the generator exactly like below)
    res.json({
        "fsg-power-village-plusplus":
            "https://download1580.mediafire.com/eh36rez763ng/7gk5sce2mkleykt/fsg-power-village-plusplus.zip",
        filteredseed:
            "https://download1491.mediafire.com/e6nv04ve3asg/nl8u4oeow9o2blc/filteredseed.zip",
        "fsg-power-village-minus-minus":
            "https://download1346.mediafire.com/h4nmnjz7nupg/4wu2lajr8658iwf/fsg-power-village-minus-minus.zip",
    });
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Started");
});
