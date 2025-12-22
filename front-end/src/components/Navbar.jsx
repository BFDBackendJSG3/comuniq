import {Link} from "react-router";

function Navbar() {
    return (
        <div className="w-full h-8 border-b flex items-center gap-3 justify-between px-4">
            <h1>Redactor</h1>
            <div className="flex gap-3">
                <Link to="/">home</Link>
                <Link to="/sobre">sobre</Link>
                <Link to="/login">test</Link>
            </div>
        </div>
    );
}

export default Navbar;