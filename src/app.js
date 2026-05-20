import express from "express"
import authRoute from "./modules/auth/auth.routes.js"
import orgRoute from "./modules/org/org.routes.js"
import boardRoute from "./modules/board/board.routes.js"
import errorMiddleware from "./common/error.middleware.js";
import taskRoute from "./modules/task/task.routes.js"

const app = express()

app.use(express.json());

app.use("/api/auth" , authRoute)
app.use("/api/org", orgRoute)
app.use("/api/board" , boardRoute)
app.use("/api/task", taskRoute)

app.use(errorMiddleware)

export default app;

