import { useState } from "react"
import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword 

} from "../../utils/firebase/firebase.utils"

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import FormInput from "../form-input/form-input.component"





import './sign-in-form.styles.scss'



const defaultFormFields ={
    email: '',
    password: '',
}

const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password} = formFields

  

    const resetFormFields = ()=> {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () =>{
        await signInWithGooglePopup();
        
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found'){
                alert('Incorrect Email or Password.')
            }
        }
    }

    const handleChange=(event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>


                
                <FormInput
                    label='Email'
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label='Password'
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />

                <div className="buttons-container">
                    <Button type="submit">
                        Sign In 
                    </Button>

                    <Button 
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        type='button'
                        onClick={signInWithGoogle}
                    
                    >
                        Sign In with Google 
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm