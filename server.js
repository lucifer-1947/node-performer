import express from 'express'

const app = express()



app.get('/',(req,res)=>{
    res.send("Performance Example")
})

function delay(duration){

    const start = Date.now();

    while(Date.now()-start < duration){

        //not doing anything....just time wasting

    }
}

app.get('/timer',(req,res)=>{
    delay(9000)
    res.send("Made Blocking to your request , with non-blocking code.")
})

app.listen(3000, ()=>{
    console.log("Web server activated listening on port 3000")
})