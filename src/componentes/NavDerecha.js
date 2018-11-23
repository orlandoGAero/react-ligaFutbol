import React, {Component} from 'react';
import equipo from '../images/teams.png';
import estadistica from '../images/stats.png';
import jugador from '../images/players.png';
import setting from '../images/setting.png';

class NavDerecha extends Component {
    render(){
        return(
            <nav className="nav-lateral">
                
                <a href="" className="nav-single nav-link">
                    <img src={equipo} alt="equipos"/>
                    <div className="nav-texto">Equipos</div>
                </a>

                <a href="" className="nav-single nav-link">
                    <img src={estadistica} alt="estadistica"/>
                    <div className="nav-texto">Estadisticas</div>
                </a>
                
                <a href="" className="nav-single nav-link">
                    <img src={jugador} alt="jugador"/>
                    <div className="nav-texto">Jugadores</div>
                </a>

                <a href="" className="nav-single nav-link">
                    <img src={setting} alt="configuracion"/>
                    <div className="nav-texto">Configuración</div>
                </a>

            </nav>
        );
    }
}

export default NavDerecha;