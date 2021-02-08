require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6020f779d3b7830a503eb6a7').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6020f8f37c8e7219707f3b25').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})