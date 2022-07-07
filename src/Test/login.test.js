import React from "react";
import {screen, render} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Login from "../pages/login";

describe('LoginTest',()=>{
    it('Debe indicar que es el inicio de sesión', () => {
        render(
            <Router>
                <Login/>
            </Router>,
        )
        // eslint-disable-next-line testing-library/prefer-presence-queries
        expect(screen.queryByText(/Inicio de sesión/i)).toBeInTheDocument()
    })
})