import { useState } from "react";

const AddContact = ({onAdd}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState();

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please Add a Contact')
        }

        onAdd({name, email, phone, address, city, state, zip})

        setName('')
        setEmail('')
        setPhone();
        setAddress('');
        setCity('');
        setState('');
        setZip();
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
                    type="number"
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
            <input type="submit" value='Save Contact' className="btn btn-block"/>
        </form>
    )
}

export default AddContact;