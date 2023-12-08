import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className="text-center p-20">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
           <Link to='/'><button className="btn btn-primary">Back To Main</button></Link>
        </div>
    );
};

export default ErrorPage;