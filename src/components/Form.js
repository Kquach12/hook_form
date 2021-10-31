import React, {useState} from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return(
        <div>
            <div>
                <form onSubmit={createUser}>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange = { (e) => setFirstName(e.target.value)}/>
                    <br/>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange = { (e) => setLastName(e.target.value)}/>
                    <br/>
                    <label>Email: </label>
                    <input type="text" value={email} onChange = { (e) => setEmail(e.target.value)}/>
                    <br/>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
                    <br/>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
            <div>
                <p>Form Data</p>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{confirmPassword}</p>
            </div>
        </div>
        
    )
}

export default Form