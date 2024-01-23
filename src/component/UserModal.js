import React, { useState } from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'
import axios from 'axios'
const UserModal = ({open,toggle,user}) => {
    const [name, setName]= useState("")
    const [surname, setSurName]= useState("")
    const [email, setEmail]= useState("")
    const [age, setAge]= useState("")
    const addUsers =(e)=>{
        e.preventDefault()
        let payload ={
           name,
           surname,
           email,
           age,
        }
        if (user !== "") {
            axios.patch(`http://localhost:8000/users/${user.id}`,{...payload}).then(res=>{
                console.log(res);
                if (res.status === 200) {
                    toggle()
                    window.location.reload()
                }
            })
        }else{
            axios.post('http://localhost:8000/users',{...payload}).then((res)=>{
                if (res.status === 201) {
                    window.location.reload()
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h1>Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form id='users' onSubmit={addUsers}>
            <input type="text" defaultValue={user.name} placeholder='name' className='form-control my-2' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" defaultValue={user.surname} placeholder='surname' className='form-control my-2' onChange={(e)=>setSurName(e.target.value)} />
            <input type="text" defaultValue={user.email} placeholder='email' className='form-control my-2' onChange={(e)=>setEmail(e.target.value)} />
            <input type="number" defaultValue={user.age} placeholder='age' className='form-control my-2' onChange={(e)=>setAge(e.target.value)} />           
        </form>
      </ModalBody>
      <ModalFooter>
        {
            user !== "" ?
            <button type='submit' form='users' className='btn btn-success'>Edit User</button> :
            <button type='submit' form='users' className='btn btn-primary'>Add User</button>

        }
      </ModalFooter>
    </Modal>
  )
}

export default UserModal
