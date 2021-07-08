import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import './styles.css';


function Login() {
    const {authentication} = useContext(AuthContext);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function HandleSubmit(e) {
        e.preventDefault();

        const data = {
            username: username,
            password: password,
        }

        authentication(data);
        history.push("/")
    }

    return (
        <div className="container">
            <div className="card">
                <h5 className="card-header text-center">Registre-se</h5>
                <div className="card-body">
                    <form className="row g-3" onSubmit={HandleSubmit}>

                        <div className="col-12">
                            <label for="name" className="form-label">Usuário</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} />
                        </div>

                        <div className="col-12">
                            <label for="name" className="form-label">Senha</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div class="col-12 mt-3">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;