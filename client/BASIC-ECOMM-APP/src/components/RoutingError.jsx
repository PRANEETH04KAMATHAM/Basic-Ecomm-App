
import {useRouteError} from 'react-router-dom'

function RoutingError(){
    let err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1 className="">{err.data}</h1>
            <h2>{err.status}---{err.statusText}</h2>
        </div>
    )
}

export default RoutingError;