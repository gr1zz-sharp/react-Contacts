import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap'

const AddContact = ({onAdd, onDelete, tab, currentContact, setTab, text}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState();

    useEffect(() => {
        if(tab === 'update') {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
            setAddress(currentContact.address);
            setCity(currentContact.city);
            setState(currentContact.state);
            setZip(currentContact.zip);
            onDelete(currentContact.id);
        }
    }, []);


    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please Add a Contact')
        }

        onAdd({name, email, phone, address, city, state, zip})

        setTab('view');
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input 
                    type="text"
                    placeholder="Add Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label>e-Mail</label>
                <input 
                    type="text"
                    placeholder="Add e-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label>Phone</label>
                <input 
                    type="text"
                    placeholder="Add Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label>Address</label>
                <input 
                    type="text"
                    placeholder="Add Street Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label>City</label>
                <input 
                    type="text"
                    placeholder="Add City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label>State</label>
                <input 
                    type="text"
                    placeholder="Add State"
                    value={state}
                    onChange={(e) => setState(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label>Zip Code</label>
                <input 
                    type="text"
                    placeholder="Add Zip Code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)} 
                />
            </div>
            <Button className='my-5' variant="primary" type='submit' onClick={(e) => onSubmit(e)}>
                {text}
            </Button>
        </form>
    )
}


export default AddContact;
