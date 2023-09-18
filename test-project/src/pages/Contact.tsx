import React from 'react'
import {Routes, Route, Outlet, Link } from "react-router-dom";
import NestedRoute from "./NestedRoute"

export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>This is the contact page.</p>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="nested_route">Nested Route</Link>
                    </li>
                </ul>
            </nav> */}
            <Outlet />
        </div>
    );
}