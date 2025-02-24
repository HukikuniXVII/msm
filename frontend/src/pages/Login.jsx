import HtmlToJsx from "../components/HtmlToJsx";
import "../styles/nav.css"
import "../styles/footer.css"
import "../styles/reg.css"

function Login() {
    return (
        <div>
            <HtmlToJsx filepath="login.html"/>
        </div>
    )
}   

export default Login