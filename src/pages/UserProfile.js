import React from "react";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const [user, setUser] = useState({});
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error(error));
    }, [userId]);

    if (!user.name) {
        return <h1>Loading...</h1>
    }
    return(
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>{user.name}</h1>
        </main>
        </>
    )
}

export default UserProfile; 