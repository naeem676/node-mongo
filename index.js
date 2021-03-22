const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')



const app = express()
//get method
app.use(cors())
// parse application/json
app.use(bodyParser.json())






// const rootCall=(req, res) =>{
//     res.send('Thank you very much')
// }

app.get('/', (req, res)=>{
    const product = {
       name:'watch',
       price:45
    }
    res.send(product)
})



const users = ["asad", "arman", "kiser", "siful", "emon"];

app.get('/users/:id', (req, res)=>{
   const userId = req.params.id
   const name = users[userId];
   res.send({name, userId})
})

app.listen(4000, ()=>console.log('Listenting to port 4000'));

//post method

app.post ('/addUser', (req, res)=>{
   //save to database
   const user = req.body;
   user.id = 55;
   res.send(user);
})


