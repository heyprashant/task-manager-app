require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6020f8fb7c8e7219707f3b27', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((user) => {
//     console.log(user)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await  User.countDocuments({ age })
    return count
}

updateAgeAndCount('6020f8fb7c8e7219707f3b27', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})