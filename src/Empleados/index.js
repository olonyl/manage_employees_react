import React, { Component } from 'react';
import Header from './header';
import Table from './table';

const INITIAL_DATA = [

    {
        Id: 1,
        Nombre: 'Luis',
        Apellido: 'Miguel',
        Correo: 'lmiguel@js.com '
    }, {
        Id: 2,
        Nombre: 'Pedro',
        Apellido: 'Infante',
        Correo: 'infante@js.com '
    }
]

class Empleados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: INITIAL_DATA,
            dataFiltered: INITIAL_DATA
        }
    }

    filterTable = (text) => {
        this.setState((prevState) => {
            let data = prevState.data.filter(_ => {
                let values = Object.values(_);

                return values.toString().toUpperCase().includes(text.toUpperCase());
            });
            return { dataFiltered: data }
        })
    }

    render() {
        let { dataFiltered } = this.state;
        return <div className="card">
            <Header filterTable={this.filterTable}></Header>
            <Table data={dataFiltered}></Table>
        </div >
    }
}

export default Empleados;