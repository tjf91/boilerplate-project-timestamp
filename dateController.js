module.exports={
    getDate:async(req,res)=>{       
        if(new Date(req.params.date)==="Invalid Date"){
            return res.json({ error : "Invalid Date" })
        }
        
        if(req.params.date.indexOf('-')===-1){
            let date=new Date(+req.params.date).toUTCString()
            let time=+req.params.date
            console.log(date, time)
            result={
                unix: time,
                utc:date
            }
                res.json(result)
            }
            else{
                let date=new Date(req.params.date).toUTCString()
                let time=new Date(req.params.date).getTime()                
                result={
                    unix: time,
                    utc:date
                }
                res.json(result)
            }
        }
    }
