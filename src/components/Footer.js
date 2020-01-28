import React, { Component } from 'react';

import CopyrightIcon from '@material-ui/icons/Copyright';

const style = {
    borderTop: "1px solid #ccc",
    padding: "20px"
}

class Header extends Component {
    render() {
        return (
            <div style={style}>
                <CopyrightIcon fontSize="small"/> 2020
            </div>
        );
    }
}

export default Header;