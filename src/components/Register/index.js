import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from "../../services/api";


import './styles.css';


function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();

    async function HandleSubmit(e){
        e.preventDefault();

        const data = {
            name: name, 
            email: email, 
            username: username, 
            password: password,
        }

        await API.post("/users", data).then(() => {
            history.push("/");
        })
    }

    return (
        <div className="container">
        <div className="card">
            <h5 className="card-header text-center">Registre-se</h5>
            <div className="card-body">
                <form className="row g-3" onSubmit={HandleSubmit}>
                    <div className="col-12">
                        <label for="name" className="form-label">Nome Completo</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="col-12">
                        <label for="name" className="form-label">E-mail</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="col-6">
                        <label for="name" className="form-label">Usuário</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)}/>
                    </div>

                    <div className="col-6">
                        <label for="name" className="form-label">Senha</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div class="col-12 mt-3">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
            );
}

            export default Register;