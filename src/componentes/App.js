import React, { Component } from 'react';
import '../css/index.css';
import Header from "./Header";
import NavDerecha from './NavDerecha';
import NavConfig from "./NavConfig";
import Footer from "./Footer";
import FormularioConfig from "./FormularioConfig";

class App extends Component {
    render() {
        return ( 
            <div>
            
                < Header 
                    titulo="Liga Futbol México"
                />

                <div className="div-principal">    
                    < NavDerecha />
                
                    <div id="contenido" className="div-contenido">
                        < NavConfig />
                        < FormularioConfig />
                    </div>
                </div>
                
                < Footer />

            </div>
        );
    }
}

export default App;