import React from 'react';
import Top from './Top.json'

class TopArea extends React.Component {
    render() {
        return (
            <section className="top-area">
                <div className="header-area">
                    <nav className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <a className="navbar-brand" href="index.html">list<span>race</span></a>
                            </div>
                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className="scroll active"><a href="#home">home</a></li>
                                    {Top.map((value) => {
                                        return<li className="scroll"><a href="#contact">{value.name}</a></li>
                                        //  <li className="active">
                                        //     <a href="#">{value.name} <i className="icofont-rounded-down"></i></a>
                                        //     <ul className="dropdown">
                                        //         <li><a href="index.html">{value.prop}</a></li>
                                        //     </ul>
                                        // </li>


                                    })}
                                   
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="clearfix"></div>
            </section>
        );
    }
}

export default TopArea;
