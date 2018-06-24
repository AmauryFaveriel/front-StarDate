import React, {Component} from 'react';
import '../style/Inscription.css';
import arrowRight from '../icons/arrowRight.svg';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import arrow from '../icons/arrow.svg';
import ReactSwipe from 'react-swipe';
import OvalToggle from '../icons/OvalToggle.png';
import oval from '../icons/oval.png';
import female from '../icons/female.svg';
import male from '../icons/male.svg';
import both from '../icons/both.svg';
import Main from './Main';

class Inscription extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0
        };
        this.backPage = this.backPage.bind(this);
        this.next = this.next.bind(this);
    }

    backPage() {
        if(this.state.index === 0) {
            this.props.navigator.popPage();
        } else {
            this.prev()
        }

    }

    next() {
        if(this.state.index === 3) {
            this.props.navigator.pushPage({component: Main})
        } else {
            this.reactSwipe.next();
        }
    }

    prev() {
        this.reactSwipe.prev();
    }

    render() {
        let that = this
        function setIndex(index) {
            that.setState({
                index
            })
        }

        function renderSwitch(index) {
            let tab = [];

            for(let i = 0; i<4;i++) {
                let classe = "oval"+i;
                if(index === i) {
                    tab.push(<img key={i} src={OvalToggle} alt="oval" className={classe} />)
                } else {
                    tab.push(<img key={i} src={oval} alt="oval" className={classe}/>)
                }

            }
            return tab
        }

        return (
            <Page key="InscriptionPage" className="InscriptionPage">
                <svg onClick={this.backPage} className="InscriptionPage_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
                <ReactSwipe
                    swipeOptions={{disableScroll: true,continuous: false, speed: 700,transitionEnd: function(index, elem) {
                            setIndex(index)
                        }}}
                    ref={reactSwipe => this.reactSwipe = reactSwipe}>
                    <div>
                <h3 className="InscriptionPage_title">Remplir les informations</h3>
            <div className="InscriptionPage_containerInscription">
                <form action="" method="post" className="InscriptionPage_containerInscription_formInscription">
                <div className="InscriptionPage_containerInscription_formInscription_flexName">
                <input type="text" name="email" id="nom" placeholder="Nom*"/>
                <input type="text" name="email" id="prenom" placeholder="Prénom*"/>
            </div>
                <input type="email" name="email" id="email" placeholder="Email*"/>
                    <input type="date" name="date" id="date" placeholder="date*"/>
                <input type="password" name="password" id="password" placeholder="Mot de passe*"/>
                <input type="password" name="password" id="password2" placeholder="Ressaisir le mot de passe*"/>
                </form>
            </div>
                    </div>

                    <div>
                        <h3 className="InscriptionPage_title2"> Vous êtes ? </h3>
                        <div className="InscriptionPage_containerInscription2">
                        <div className="InscriptionPage_containerInscription2_div">
                            <img src={male} alt="logoFemale" className="InscriptionPage_containerInscription2_logo"/>
                        </div>
                        <div className="InscriptionPage_containerInscription2_div">
                            <img src={female} alt="logoMale" className="InscriptionPage_containerInscription2_logo"/>
                        </div>
                        <div className="InscriptionPage_containerInscription2_div">
                            <h2 className="InscriptionPage_containerInscription2_div_other"> Autre </h2>
                        </div>
                        </div>
                        <h3 className="InscriptionPage_title2"> Vous recherchez ? </h3>
                    <div className="InscriptionPage_containerInscription2">
                        <div className="InscriptionPage_containerInscription2">
                            <div className="InscriptionPage_containerInscription2_div">
                                <img src={male} alt="logoFemale" className="InscriptionPage_containerInscription2_logo"/>
                            </div>
                            <div className="InscriptionPage_containerInscription2_div">
                                <img src={female} alt="logoMale" className="InscriptionPage_containerInscription2_logo"/>
                            </div>
                            <div className="InscriptionPage_containerInscription2_div">
                                <img src={both} alt="logoAutre" className="InscriptionPage_containerInscription2_logo"/>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div>
                        <h3 className="InscriptionPage_title"> Sélectionnez votre galaxie </h3>
                        <div className="InscriptionPage_containerInscription3">
                            <div className="InscriptionPage_containerInscription3_div">
                                <h1 className="InscriptionPage_containerInscription3_div_title">Voie lactée</h1>
                            </div>
                            <div className="InscriptionPage_containerInscription3_div">
                                <h1 className="InscriptionPage_containerInscription3_div_title"> Andromède </h1>
                            </div>
                            <div className="InscriptionPage_containerInscription3_div">
                                <h1 className="InscriptionPage_containerInscription3_div_title"> Têtard </h1>
                            </div>
                            <div className="InscriptionPage_containerInscription3_div">
                                <h1 className="InscriptionPage_containerInscription3_div_title">Autres </h1>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="InscriptionPage_title"> Dites nous en plus </h3>
                        <div className="InscriptionPage_containerInscription4">
                        <div className="InscriptionPage_containerInscription4_pic">
                        </div>
                        <select className="InscriptionPage_containerInscription4_espece">
                        <option value="" selected disabled hidden>Votre espece</option>
                            <option value="test1">test1</option>
                            <option value="test2">test2</option>
                            <option value="test3">test3</option>
                            <option value="test4">test4</option>
                        </select>
                        <div className="InscriptionPage_containerInscription4_Bio">
                        <textarea placeholder="Bio" rows="4" cols="50">
                            
                        </textarea>
                            </div>
                        </div>
                    </div>
                </ReactSwipe>
            <img onClick={this.next} src={arrowRight} alt="NextStep" className="InscriptionPage_icon"/>
                <div className="LoginPage_index" style={{marginTop: '30px'}}>
                    {renderSwitch(this.state.index)}
                </div>
            </Page>
        )
    }
}

export default Inscription