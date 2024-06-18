import './App.scss';
import { useEffect, useState, useRef } from 'react'
import axios from './api/contacts'

//components
import ContactsList from './components/ContactsList'
import AddContact from './components/AddContact'

function App() {

  const [contact, setcontact] = useState({})
  const [changecontact, setchangecontact] = useState({})
  const [Editcontact, setEditcontact] = useState({ name: null, email: null })



  useEffect(() => {
    const GetAllContact = async () => {
      const AllContact = await GetContact()
      if (AllContact) setcontact(AllContact)
    }
    GetAllContact()
  }, [changecontact])

  const GetContact = async () => {
    const respons = await axios.get('/contacts')
    return respons.data
  }

  const PostContact = async () => {
    if (Editcontact.name || Editcontact.email) {
      await axios.put(`/contacts/${changecontact.id}`, changecontact)
      await setEditcontact({ name: "", email: "" })
      setchangecontact({ name: "", email: "" })

    } else {
      try {
        await axios.post('/contacts', changecontact)
        setchangecontact({ name: "", email: "" })
      } catch (err) {
        console.log(err);
      }
    }

  }

  const ChangeHandeler = (e) => {
    setchangecontact({ ...changecontact, [e.target.name]: e.target.value })
    console.log(changecontact);
  }

  const RemoveContact = async (id) => {
    const respons = await axios.delete(`/contacts/${id}`)
    console.log(respons)
    setchangecontact({ ...changecontact })
  }

  const EditContact = (id, name, email) => {
    setEditcontact({ id: id, name: name, email: email })
    setchangecontact({ id: id, name: name, email: email })

    console.log(name);
  }



  return (
    <div className="App">

      <AddContact changecontact={changecontact} ChangeHandeler={ChangeHandeler} PostContact={PostContact} />

      {contact.length ? contact.map((con) => <ContactsList key={con.id} name={con.name} email={con.email} RemoveContact={() => RemoveContact(con.id)} EditContact={() => EditContact(con.id, con.name, con.email)} />) : null}

    </div>
  );

}

export default App;
