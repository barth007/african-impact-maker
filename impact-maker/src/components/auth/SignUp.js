import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Form from "./Form";
import Input from "./Input";


const SignUp=()=>{
    const inputFields = [
        {
            type: "text",
            name: "email",
            placeholder: "Email",
            id: "email",
            label: "Email"
        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
            id: "password",
            label: "Password",
        },
        {
            type: "password",
            name: "password2",
            placeholder: "Confirm Password",
            id: "password",
            label: "Confirm Password",
        }
    ]
    return(
        <>
        <section>
            <Navbar/>
            <Form text="Sign Up" button_text="Sign-Up" >
                {inputFields.map((item, index)=>(
                <Input key={index} label={item.label} type={item.type} name={item.name} id={item.id} placeholder={item.placeholder}/>
                ))}
            </Form>
            <Footer/>
        </section>
        <style jsx>{`

        `}</style>
        </>
    )
}

export default SignUp;