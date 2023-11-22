import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oopsss!!!!!!</h2>
            <Link to='/'>Go Back to Home Page!!</Link>
        </div>
    );
};

export default ErrorPage;