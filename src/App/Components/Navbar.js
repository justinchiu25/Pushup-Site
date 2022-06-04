import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar as Navbarb, NavDropdown } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import firebasekey from "../../firebaseKey.json"


//MUST CHANGE THIS TO PROCESS.ENV
const firebaseConfig = {
    apiKey: firebasekey.firebase_apiKey,
    authDomain: firebasekey.firebase_authDomain,
    projectId: firebasekey.firebase_projectId,
    storageBucket: firebasekey.firebase_storageBucket,
    messagingSenderId: firebasekey.firebase_messagingSenderId,
    appId: firebasekey.firebase_appId,
}

const app = initializeApp(firebaseConfig);

export default function Navbar() {
    return (
        <>
            <div className="Container">
                <Navbarb bg="dark" variant="dark">
                    <Navbarb.Brand> {/* .brand is a container for local uses (add img here)*/}
                        Dota Pushups
                    </Navbarb.Brand>

                    <Nav>
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="/"> Leaderboards </Nav.Link>
                        <Nav.Link href="/user"> Profile </Nav.Link>
                        <NavDropdown title="Settings">
                            <NavDropdown.Item href="/"> Edit Profile </NavDropdown.Item>
                            <NavDropdown.Item href="/"> Log Out </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbarb>
            </div>

            <Outlet /> {/*Outlet important to render children*/} 
        </>
    )
}
