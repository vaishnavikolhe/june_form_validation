import { useState } from "react"

const SignUpForm = () => {

    let [name, SetName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [cpw, setCpw] = useState('');
    let [errorMessage, setErrorMessage] = useState('');
    let [successMessage, setSuccessMessage] = useState('')
    document.title = `Hello ${name}`;

    function submitForm() {
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || cpw.trim() === '') {
            setSuccessMessage('')
            setErrorMessage('All the fields are mandatory');
        } else if (!name.trim().includes(' ')) {
            setSuccessMessage('')
            setErrorMessage('Full name is mandatory');
        } else if (!email.trim().includes("@") || !email.trim().includes('.')) {
            setSuccessMessage('')
            setErrorMessage('Please enter valid email address');
        } else if (password.trim() !== cpw.trim()) {
            setSuccessMessage('')
            setErrorMessage('Password does not match');
        } else {
            setErrorMessage('')
            setSuccessMessage('Successfully Signed Up!')
        }

    }
    return ( <
            div >
            <
            div className = "form" >
            <
            h1 style = {
                { fontWeight: 300, fontSize: '30px' }
            } > Signup < /h1> <
            input type = "text"
            name = "name"
            id = "name"
            placeholder = "Full Name"
            onChange = {
                (event) => { SetName(event.target.value) }
            }
            /> <
            input type = "text"
            name = "email"
            id = "email"
            placeholder = "Email"
            onChange = {
                (event) => { setEmail(event.target.value) }
            }
            /> <
            input type = "password"
            name = "pw"
            id = "pw"
            placeholder = "Password"
            onChange = {
                (event) => { setPassword(event.target.value) }
            }
            /> <
            input type = "password"
            name = "c-pw"
            id = "c-pw"
            placeholder = "Confirm Password"
            onChange = {
                (event) => { setCpw(event.target.value) }
            }
            /> {
            (errorMessage) && ( <
                p style = {
                    { color: 'red' }
                }
                id = "errorMessage" > Error: { errorMessage } < /p>
            )
        } {
            (successMessage) && ( <
                p style = {
                    { color: "green" }
                }
                id = "success-message" > { successMessage } < /p>
            )
        } <
        button id = "signup-form"
    className = "btns signup-btn"
    onClick = { submitForm } >
        Signup <
        /button> < /
    div > <
        /div>
)
}

export default SignUpForm