import HtmlToJsx from "../components/HtmlToJsx";
import "../styles/nav.css"
import "../styles/footer.css"
import "../styles/reg.css"

function Account() {
    return (
        <div>
            <HtmlToJsx filepath="account.html"/>
        </div>
    )
}   

export default Account