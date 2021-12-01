// Com promises só executa uma vez
// Eventos são usados para ações continuas

// const stdin = process.openStdin()

// function main() {   
//     return new Promise((resolve, reject) => {
//         stdin.addListener('data', (data) => {
//             return resolve(`you sent this data: ${data}`)
//         })
//     })
// }

// main().then((data) => {
//     console.log(data)
// })

const stdin = process.openStdin()

stdin.addListener('data', (data) => {
    return console.log(`you sent this data: ${data}`)
})


