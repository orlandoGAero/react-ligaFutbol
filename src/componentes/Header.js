import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <header className="heading">
                <h1>{this.props.titulo}</h1>
            </header>
        )
    }
}

export default Header;