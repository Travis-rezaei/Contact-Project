

const AddContact=({ChangeHandeler,PostContact,changecontact})=>{


           


return (
    <div className='Add-Contact'>
       <h1>Add Contact</h1>
       <input type='text' value={changecontact.name} placeholder='Add Contact' name='name' onChange={ChangeHandeler}></input>
       <input type='text' value={changecontact.email} placeholder='Add Email' name='email' onChange={ChangeHandeler}></input>
       <div style={{width:'500px'}}>
         <button onClick={PostContact}>Add contact</button>
       </div>
    </div>
);
}

export default AddContact;