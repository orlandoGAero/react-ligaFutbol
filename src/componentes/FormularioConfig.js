import React, {Component} from 'react';
import '../css/formulario.css';

class FormularioConfig extends Component {

    //refs
    nombreRef = React.createRef();
    fundacionRef = React.createRef();
    apodoRef = React.createRef();
    propietarioRef = React.createRef();
    presidenteRef = React.createRef();
    entrenadorRef = React.createRef();
    logoRef = React.createRef();
    estadioRef = React.createRef();
    ubicacionRef = React.createRef();
    capacidadRef = React.createRef();
    inaguracionRef = React.createRef();
    imagenEstadioRef = React.createRef();

    enviarDatos = e => {

        e.preventDefault();

        const equipo = {
            nombre : this.nombreRef.current.value,
            fundacion : this.fundacionRef.current.value,
            apodo : this.apodoRef.current.value,
            propietario : this.propietarioRef.current.value,
            presidente : this.presidenteRef.current.value,
            entrenador : this.entrenadorRef.current.value,
            logo : this.logoRef.current.value,
            estadio : this.estadioRef.current.value,
            capacidad : this.capacidadRef.current.value,
            ubicacion : this.ubicacionRef.current.value,
            inaguracion : this.inaguracionRef.current.value,
            imgEstadio : this.imagenEstadioRef.current.value
        }

        console.log('Equipo :', equipo);
    }

    render(){
        return(
            <div className="formulario">
                <form onSubmit={this.enviarDatos}>
                    <h2 className="titulo2">Crear Equipo</h2>
                    <h3 className="titulo3">Datos Generales</h3>
                    
                    <div className="div-label">
                        <div className="etiqueta"><label>Nombre Completo</label></div>
                        <div className="etiqueta"><label>Fundación</label></div>
                        <div className="etiqueta"><label>Apodo</label></div>
                    </div>
                    <div className="div-input">    
                        <div>
                            <input ref={this.nombreRef} type="text" placeholder="Nombre del Equipo"/> 
                        </div>
                        <div className="entrada-segunda">
                            <input ref={this.fundacionRef} type="date"/>
                        </div>
                        <div className="entrada-segunda">
                            <input ref={this.apodoRef} type="text" placeholder="Alias del equipo"/>
                        </div>
                    </div>

                    <div className="div-label">
                        <div className="etiqueta"><label>Propietario</label></div>
                        <div className="etiqueta"><label>Presidente</label></div>
                        <div className="etiqueta"><label>Entrenador</label></div>
                    </div>
                    <div className="div-input">    
                        <div>
                            <input ref={this.propietarioRef} type="text" placeholder="Nombre Completo"/> 
                        </div>
                        <div className="entrada-segunda">
                            <input ref={this.presidenteRef} type="text" placeholder="Nombre Completo"/>
                        </div>
                        <div className="entrada-segunda">
                            <input ref={this.entrenadorRef} type="text" placeholder="Nombre Completo"/>
                        </div>
                    </div>

                    <div className="div-label">
                        <div className="etiqueta"><label>Logo</label></div>
                    </div>
                    <div className="div-input">    
                        <div>
                            <input ref={this.logoRef} type="file"/>
                        </div>
                    </div>

                    {/* instalaciones */}
                    <hr/>
                    <h3 className="titulo3">Instalaciones</h3>
                    
                    <div className="div-label-i">
                        <div className="etiqueta-i"><label>Estadio</label></div>
                        <div className="etiqueta-i"><label>Ubicación</label></div>
                    </div>
                    <div className="div-input-i">    
                        <div>
                            <input ref={this.estadioRef} type="text"/> 
                        </div>
                        <div>
                            <input ref={this.ubicacionRef} type="text"/>
                        </div>
                    </div>

                    <div className="div-label-i">
                        <div className="etiqueta-i"><label>Capacidad</label></div>
                        <div className="etiqueta-i"><label>Inaguración</label></div>
                    </div>
                    <div className="div-input-i">    
                        <div>
                            <input ref={this.capacidadRef} type="number"/> 
                        </div>
                        <div>
                            <input ref={this.inaguracionRef} type="date"/>
                        </div>
                    </div>

                    <div className="div-label">
                        <div className="etiqueta"><label>Imagen Estadio</label></div>
                    </div>
                    <div className="div-input">    
                        <div>
                            <input ref={this.imagenEstadioRef} type="file"/>
                        </div>
                    </div>

                    <hr/>
                    <div className="boton">
                        <button>Guardar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormularioConfig;