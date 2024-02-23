
export default function Footer(){
    return (
        <footer>
            <span className="three">
             <a href="https://www.payamd.com/" >
                payamd.com
            </a>
            {" © "}
            {new Date().getFullYear()}
            {" | "}
                All Rights Reserved.
            </span>
        </footer>
    )
}