import React, { Component } from 'react';

export default class Header extends Component {

    state = {
        filter: ''
    }

    onTextChangeHandler = (e) => {
        let elem = e.target;
        this.setState(() => ({ [elem.name]: elem.value }));
    }

    render() {
        let { filter } = this.state;

        return <div className="card-header">
            <div className="input-group mb-3">
                <input type="text" name="filter" values={filter} className="form-control" placeholder="Introduce el texto a filtrar" onChange={this.onTextChangeHandler} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => this.props.filterTable(filter)} >Buscar <i className="fas fa-search-plus"></i></button>
                </div>
            </div>
        </div>
    }
}