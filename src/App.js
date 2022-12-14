import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
    state = {
        productos: [
            {
                name: 'Tomate', price: 1500,
                img: '/productos/tomate.jpg',
            },
            {
                name: 'Arbejas', price: 1200,
                img: '/productos/arbejas.jpg',
            },
            {
                name: 'Lechuga', price: 500,
                img: '/productos/lechuga.jpg',
            },
        ]
    }
    render() {
        return (
            <div>
                <Navbar />
                <Layout>
                    <Title />
                    <Productos
                        agregarAlCarro={() => console.log("No hace nada")}
                        productos={this.state.productos}
                    />
                </Layout>

            </div>
        )
    }
}


export default App;
