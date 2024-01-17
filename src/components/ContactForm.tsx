import { useEffect } from "react";
import { StyledContactForm } from "../styles/StyledContactForm";

export default function ContactForm() {
    useEffect(()=> {
        window.localStorage.clear();
    },[])
    return (
        <StyledContactForm>
            <form>
                
            </form>
        </StyledContactForm>
    )
}