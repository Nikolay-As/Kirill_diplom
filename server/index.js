const express = require('express')
var exec = require('child_process').execFile
const app = express()
const port = 3000

app.get('/', (req, res) => {

    console.log("'Пытаюсь запустить алгоритм...")
  
    exec("Diplom.exe", function (err, data) { // Запуск exe файла 
        if (err) { // Проверка на ошибку открытия файла, но не на корректность запуска
            console.log(err)
           
            console.log('Произошла ошибка обработки файла')
        } else { // Если файл удалось запустить
            
            console.log('Файл готов')
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})