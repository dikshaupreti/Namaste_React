import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError()
    console.log(error)
    return(<>
        <h3> oops there is an error loading page</h3>
        <p> {error.status} and {error.statusText}</p>
    </>
        
    )
}