import React from 'react';

import myGrid from "../../myGrid.min.css";

import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="container">
                    <div className="row">
                        <div className="desk-6 mob-12 red flex-end space-between">
                            <a href="">react c'est chaud</a>
                            <a href="">react c'est chaud</a>
                            <a href="">react c'est chaud</a>
                            <a href="">react c'est chaud</a>
                        </div>
                        <div className="desk-6 mob-12 blue flex-end space-between">
                            <a href="">react c'est chaud</a>
                            <a href="">react c'est chaud</a>
                            <a href="">react c'est chaud</a>
                            <a href="">react c'est chaud</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;
