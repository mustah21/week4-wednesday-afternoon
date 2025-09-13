import '../App.css'
import {useState} from 'react';



const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        const contactUsInformation = {
            name,
            email,
            password
        }
        console.log(contactUsInformation); // For debugging

        setName('');
        setEmail('');
        setPassword('');
    }



    return (
        <div>
            <h2>Registration page</h2>
            <section className='section'>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input id='name' type='text' onChange={e => setName(e.target.value)} value={name}></input>
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input id='name' type='text' onChange={e => setEmail(e.target.value)} value= {email}></input>
                    </div>
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <input id='password' type='password' onChange={e => setPassword(e.target.value)} value={password}></input>
                    </div>
                    <button className='btn'>Submit</button>
                </form>


            </section>
        </div>
    )
}

export default Registration;