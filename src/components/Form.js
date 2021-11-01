import React, {useState} from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const validateFirstName = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters!")
        } 
        else {
            setFirstNameError("")
        }
    }
    const validateLastName = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters!")
        } 
        else {
            setLastNameError("")
        }
    }
    const validateEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters!")
        } 
        else {
            setEmailError("")
        }
    }
    const validatePassword = (e) => {
        setPassword(e.target.value)

        if (e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters!")
        } 
        else {
            setPasswordError("")
        }
    }
    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)

        if (e.target.value !== password){
            setConfirmPasswordError("Passwords must match!")
        } 
        else {
            setConfirmPasswordError("")
        }
    }

    return(
        <div>
            <div>
                <form onSubmit={createUser}>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange = {validateFirstName}/>
                    {
                        validateFirstName ? 
                        <p>{ firstNameError }</p> :
                        ''
                    }
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange = { validateLastName }/>
                    {
                        validateLastName ? 
                        <p>{ lastNameError }</p> :
                        ''
                    }
                    <label>Email: </label>
                    <input type="text" value={email} onChange = { validateEmail }/>
                    {
                        validateEmail ? 
                        <p>{ emailError }</p> :
                        ''
                    }
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ validatePassword }/>
                    {
                        validatePassword ? 
                        <p>{ passwordError }</p> :
                        ''
                    }
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ validateConfirmPassword }/>
                    {
                        validateConfirmPassword ? 
                        <p>{ confirmPasswordError }</p> :
                        ''
                    }
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