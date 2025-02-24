import HtmlToJsx from "../components/HtmlToJsx";
import "../styles/nav.css"
import "../styles/footer.css"
import "../styles/reg.css"

function Register() {
    return (
        <div>
            <HtmlToJsx filepath="register.html"/>
        </div>
    )
}   

export default Register