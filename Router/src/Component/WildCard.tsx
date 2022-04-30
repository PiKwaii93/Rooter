import { useParams } from "react-router-dom"

export default function WildCard() {

    const {wildcard} = useParams(); 

    console.log(wildcard);

    return(
        <div>
            <h1>
                {wildcard}
            </h1>
        </div>
    )
}