
export default function Logout({user, setUser}) {


    const logout = () => {
        setUser(null);
    }

    if(user){
        return(
            <div style={{
                margin:"10px",
                display: "flex",
                justifyContent: "center",
                }}>
                <button onClick={logout} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Logout</button>
            </div>
        )
    }else{
        return (
            <div style={{
                margin:"10px",
                display: "flex",
                justifyContent: "center",
                }}>
                <h3>Vous êtes déconnecté</h3>
            </div>
        )
    }

}