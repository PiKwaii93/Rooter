import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter, 
  Routes,
  Route,
  Link
} from "react-router-dom";
import Autre from "./Component/Autre";
import Maison from "./Component/Maison";
import SousEl1 from './Component/SousEl1';
import SousEl2 from './Component/SousEl2';
import ParDefaut from './Component/ParDefaut';
import WildCard from './Component/WildCard';
import NotFound from './Component/NotFound';
import NeedAuth from './Component/NeedAuth';
import NotAuthorized from './Component/NotAuthorized';
import Logout from './Component/Logout';
import Profil from './Profil';
import ConnexionForm from './Component/ConnexionForm';

export default function App() {
  const [user, setUser] = useState<string>('');

  function log() {
      console.log(user);
  }
  return (
              <div className='container mt-5'>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Logout user={user} setUser={setUser}/>}/>
                    </Routes>
                    <div>
                        <div style={{    
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            borderRadius: "30px",
                            padding: "10px",
                            backgroundColor: "#5ee7e7",
                            color: "white",}}>
                            <div>
                                <h1>Mon Router</h1>
                            </div>
                            <ul style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                width: "100%",
                                
                            }}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="*">*</Link></li>
                                <li><Link to="/profil">Profil</Link></li>
                                <li><Link to="/autre">Autre</Link></li>
                                <ul>
                                    <li><Link to="/autre/sous-element-1">Sous Element 1</Link></li>
                                    <li><Link to="/autre/sous-element-2">Sous Element 2</Link></li>
                                </ul>
                            </ul>
                        </div>
                        <Routes>
                            <Route path="/" element={<Maison/>}/>

                            <Route path="*" element={<NotFound/>}/>

                            <Route path="/profil" element={<Profil user={user}/>}/>


{/*                             <Route path=":wildcard" element={<WildCard/>}/>
 */}
                            <Route path="not-authorized" element={<NotAuthorized/>}/>
    
                            <Route path="/autre/*" element={
                                <NeedAuth user={user}>
                                    <Autre/>
                                </NeedAuth>
                            }/>
                        </Routes>
                        <Routes>

                            <Route path='*' element={<ConnexionForm setUser={setUser}/>}/>

                        </Routes>
                    </div>
                </BrowserRouter>
                
              </div>
  )
}
