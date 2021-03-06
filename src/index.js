const express=require("express")
const userRouter=require("./routers/users")
const taskRouter=require("./routers/tasks")
require("./db/mongoose")
const jws=require("jsonwebtoken")
 
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task=require("./models/task")
const User=require("./models/user")
