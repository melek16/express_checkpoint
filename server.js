let express=require('express')
let app=express()
let path=require("path")
app.set('view engine', 'pug');
app.set('views','./views');
const checkTime=(req,res,next)=>{
    let day=new Date().getDay()
    let hour=new Date().getHours()
    if(day>0 && day <6 && hour<17 && hour>8 ){  
        next()
    }else{
        res.render("TimeError")
    }
}

app.use(checkTime)

app.get('/',(req,res)=>res.render("Home page"))
app.get('/contact',(req,res)=>res.render("Contact us"))
app.get('/services',(req,res)=>res.render("Our Services"))

let PORT=process.env.PORT || 3000
app.listen(PORT)