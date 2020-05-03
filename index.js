const express =require('express')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

persons=[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]
  app.get('/api/persons',(req,res)=>{
    res.json(persons)  
  })
app.get('/info',(req,res)=>{
const num =persons.length
res.send('<p>PhoneBook has info for '+ num +  ' people </p><p>'+ new Date() + ' </p>');
})

app.get('/api/persons/:id',(req,res)=>{
    const id= Number(req.params.id)
    const person = persons.find(x=>x.id===id)
    if(person)
    res.json(person)
    else
    res.status(404).end()
})
// app.delete('/api/persons/:id',(req,res)=>{
//     const id= Number(req.params.id)
//     persons=persons.filter(x=>x.id!==id)
//     res.status(204).end()
// })

app.post('/api/persons',(req,res)=>{
    const obj=req.body
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
    const x=persons.find(x=>x.name===obj.name)
    if(x)
    {
        return res.status(400).json({
            error:'name must be unique'
        })
    }
    const newPerson={
        name:obj.name.trim(),
        number:obj.number,
        id:Math.floor(Math.random()*100)
    }
    persons=persons.concat(newPerson)
    res.json(newPerson)
})

  const PORT=process.env.PORT || 3001
  app.listen(PORT ,()=>{
      console.log(`Server running on port ${PORT}`)
  })

