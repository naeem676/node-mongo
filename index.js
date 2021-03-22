const express = require('express')

const app = express()

// const rootCall=(req, res) =>{
//     res.send('Thank you very much')
// }

app.get('/', (req, res)=>{
    res.send('I know how to open node...YAY')
} )

app.listen(4000, ()=>console.log('Listenting to port 4000'));




