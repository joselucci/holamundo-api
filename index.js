const express = require('express')
const cors = require('cors')

const app = express()
const port =3000

//#region 
app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json({
    type:"*/*"
}))

app.use(cors());
//#endregion

//Cuando te hagan un get a http://localhost:3000/transaction
app.get('/transactions',(req, res) => {
    res.send('Funcionó get')
})

//Cuando tr hagan un post a http://localhost:3000/transaction
app.post('/transactions',(req, res) => {
    console.log("Me está llegando algoooo!!!!");
    //res.send('Me hicieron un post')
})

app.listen(port, () =>{
    console.log(`Estoy ejecutandome en http://localhost:${port}`)
})

