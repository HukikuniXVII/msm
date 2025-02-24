import HtmlToJsx from "../components/HtmlToJsx";
import "../styles/nav.css"
import "../styles/footer.css"
import "../styles/reg.css"
import "../styles/review.css"

function Index() {
    return (
        <div>
            <HtmlToJsx filepath="index.html"/>
        </div>
    )
}   

export default Index