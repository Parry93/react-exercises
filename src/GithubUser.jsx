import { useEffect } from "react";
import UseGithubUser from "./UseGithubUser";


export function GithubUser({username}) {

const {data, fetchData} = UseGithubUser(username)


useEffect(() => {

    fetchData(username)

   }, [username])

return(
    
    <div>
    {data && <h1>{data.name}</h1>}
    {data && <h1>{data.html_url}</h1>}

    </div>
    
)

}
