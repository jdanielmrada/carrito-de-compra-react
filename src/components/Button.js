import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0a283e',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderradius: '5px',
        cursor: 'pointer'
    }
}
class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}


export default Button
