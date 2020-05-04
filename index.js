const express =require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
require('dotenv').config
const Person = require('./modules/persons')
mongoose.set('useFindAndModify', false)

app.use(express.static('build'))
app.use(cors())
app.use(express.json())


 app.get('/api/persons',(req,res)=>{
    Person.find({}).then(persons=>{
      res.json(persons.map(x=>x.toJSON()))
    })
  })

app.get('/api/persons/:id',(req,res,next)=>{
  Person.findById(req.params.id).then(person=>{
    if(person)
    res.json(person.toJSON())
    else 
    res.status(404).end()
  })
  .catch(error=>next(error))
})

app.put('/api/persons/:id',(req,res,next)=>{
const body=req.body
const pep ={
  name:body.name,
  number:body.number
}
Person.findByIdAndUpdate(req.params.id, pep , {new:true})
.then(updatedPerson=>{
  res.json(updatedPerson.toJSON())
})
  .catch(error=>next(error))
})


app.delete('/api/persons/:id',(req,res,next)=>{
  Person.findByIdAndRemove(req.params.id)
  .then(result=>{
    res.status(204).end()
  })
  .catch(error=>next(error))
})


app.post('/api/persons',(req,res)=>{
    const body=req.body
    if(!req.body.name)
    {
        return res.status(400).json({
            error:'no name is given'
        })
    }
    if(!req.body.number){
        return res.status(400).json({
            error:'no number is given'
        })
    }
    const person=new Person({
      name:body.name,
      number:body.number
    })
    person.save().then(savedPerson=>{
      res.json(savedPerson.toJSON())
      .catch(error=>next(error))
    })
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)


const errorHandler=(error,req,res,next)=>{
  console.log(error.message)
  if(error.name==='CastError')
  return res.status(400).send({'error':'malformatted id'})
  else if (error.name === 'ValidationError') 
  return response.status(400).json({ error: error.message })

  next(error)
}
//handles results related to errors 
app.use(errorHandler)

  const PORT=process.env.PORT || 3001
  app.listen(PORT ,()=>{
      console.log(`Server running on port ${PORT}`)
  })

