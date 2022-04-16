import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/create-post">New Post</Link></li>
                </ul>
            </nav>
        </header>
    );

}
export default Header;