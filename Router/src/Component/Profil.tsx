
export default function Profil({user}) {

    if(user){
        return(
            <div>
                <p>
                    <h1>Hello {user}</h1>
                    
                </p>
            </div>
        )
    }


}