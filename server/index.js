import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express()
app.use(cors())

app.get("/summary/:id", (req, res) => {
  download()
  res.send("ID do video:" + req.params.id)
})

app.listen(3333, () => console.log("Server is running on port 3333"))
