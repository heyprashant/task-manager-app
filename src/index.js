const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000

// app.use( (req, res, next) => {
//     res.status(503).send('Site under maintenance, services are shudtownd temprarily')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    const user = await User.findById('60263e097f2d27618003ae3a')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

// const main = async () => {
//     const task = await Task.findById('60263ffc415085329478756f')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)
// }

// main()