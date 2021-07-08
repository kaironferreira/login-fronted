import { useEffect, useState } from "react";
import api from '../../services/api';


function Home() {
    const [user, setUser] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem("@token:login");

        if (token) {
            api.get("/users", { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
                setUser(response.data);
            })
        }
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Usuário</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((users) => {
                        return (
                            <tr key={users._id}>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.username}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home;