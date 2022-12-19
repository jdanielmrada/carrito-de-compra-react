import { Component } from "react";

const stiles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem'
    }
}
class Logo extends Component {
    render() {
        return (
            <div style={stiles.logo}>
                Shop
            </div>
        )
    }
}

export default Logo
