import express from 'express';
const router=express.Router()
import {v4 as uuidv4} from 'uuid';
let arr=[]

router.get('/',(req,res)=>{
    res.send(arr)
})
router.post('/',(req,res)=>{
    const user=req.body;
    arr.push({...user,id:uuidv4()})
    res.send(`User with the name ${user.name} added to the database`)
    console.log('User added to the database')
}
)

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    arr=arr.filter((user)=>user.id!==id)
    res.send(`User with the id ${id} deleted from the database`)
})

router.patch('/:id',(req,res)=>{
    const id=req.params.id
    const {name,Stream,age}=req.body
    const user=arr.find((user)=>user.id===id)
    if (name){
        user.name=name
    }
    if (Stream){
        user.Stream=Stream
    }
    if(age){ 
        user.age=age
    }       
    res.send(`User with the id ${id} updated`)
})


router.get('/:id',(req,res)=>{
    const found=arr.find((user)=>user.id===req.params.id)
    res.send(found)
})
export default router;
