import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export default function ConnexionForm({setUser}) {

    const [value, setValue] = useState<string>('');

    const navigate = useNavigate();

    let location = useLocation();
    
    let from = location.state?.from?.pathname || '/profil';


    const handleChange = (e : any) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(value);
        if(value!=""){
            setUser(value);
        }
        navigate(from, {replace: true});
    }

    return(
        <div>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}} onSubmit={handleSubmit}>
                <label for="name">Veuillez entrer votre nom</label>
                <input type='text' name="name" value={value} onChange={handleChange}/>
                <button type="submit"> Envoyer </button>
            </form>
        </div>
    )
}