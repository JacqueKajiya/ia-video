import cors from "cors"
import express from "express"

import { download } from "./download.js"
import { transcribe } from "./transcribe.js"
import { summarize } from "./summaryze.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/summary/:id", async (req, res) => {
  await download(req.params.id)
  const result = await transcribe()

  res.json({ result })
})

app.post("/summary", async (req, res) => {
  const result = await summarize(req.body.text)
  return res.json({ result })
})

app.listen(3333, () => console.log("Server is running on port 3333"))
