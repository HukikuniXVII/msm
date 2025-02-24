import HtmlToJsx from "../components/HtmlToJsx";
import "../styles/nav.css"
import "../styles/footer.css"
import "../styles/review.css"

function Review() {
    return (
        <div>
            <HtmlToJsx filepath="review.html"/>
        </div>
    )
}   

export default Review