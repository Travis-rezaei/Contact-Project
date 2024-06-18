import img from '../img/download.png'
import { HiArchiveBoxXMark } from "react-icons/hi2";

const ContactsList = ({ name, email, RemoveContact, EditContact }) => {

    return (
        <div className='Contact-compon' key={name}>

            <div className='Contact-List'>
                <div className='img'>
                    <img src={img} alt='Contact-img'></img>
                </div>
                <div className='info'>
                    <h4>{name}</h4>
                    <h4>{email}</h4>
                </div>
            </div>

            <div className='Contact-Update'>
                <button onClick={EditContact}>Edit</button>
                <HiArchiveBoxXMark className='Delete-icon' onClick={RemoveContact} />
            </div>

        </div>
    );
}
export default ContactsList;