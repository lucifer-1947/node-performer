import express from 'express'
import cluster from 'cluster'
import process from 'process'

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
    res.send(`Made Blocking to your request , with non-blocking code.\nBut our worker 🧑🏽‍💼${process.pid} solved that issue and made non-blocing\n Thanks 🤗 to 🧑🏽‍💼${process.pid}`)

})



if(cluster.isPrimary){
    console.log("Master[Company] has been started ,  anyone can come and fork🖕🏻 me [Activly 📈Hiring...] at port 3000")
    cluster.fork()
    cluster.fork()
}
else {

    console.log(`Hey 🧑🏽‍💼i-${process.pid} got hired as worker`)
    app.listen(3000, ()=>{
        console.log('starting to work... at port 3000')
    })
}

