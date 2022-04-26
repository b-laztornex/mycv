import React from 'react'
import ReactToPrint from 'react-to-print';
import {NavBarHeader, Header, IntroVideo, MenuCenter,IconBorder} from './styles'
import ReactCountryFlag from "react-country-flag"
import {Curriculum} from './curriculum'
import Loader from './loader'
import HeaderOptions from './header_options'
import MenuHeaderOptions from './menu_header_options'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload} from '@fortawesome/free-solid-svg-icons'

const ref = React.createRef();
const video_url = `${process.env.PUBLIC_URL}/video/intro.mp4`;

const file_ln = {
  es: require('../../data/cv_es.json'),
  en: require('../../data/cv_en.json'),
  de: require('../../data/cv_de.json')
};
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderHeaderOptions = this.renderHeaderOptions.bind(this);
    this.renderMenuHeaderOptions = this.renderMenuHeaderOptions.bind(this);
    
    this.state = {
      isLoading: true,
      language: {ln: 'en', flag: 'us'},
      opacity: 0, 
      content: file_ln['en']
    };
  }

  handleLanguageChange(ln, flag) {
    this.setState({ 
      language: {ln: ln, flag: flag} ,
      content: file_ln[ln]
    });
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 330) {
          this.setState({ opacity: 1 })
        } else {
          this.setState({ opacity: 0 })
        }
      }
    }
    setTimeout(
      function() {
        this.setState({isLoading: false})
      }
      .bind(this),
      4000
    );
    
  }

  componentWillUnmount() {
  }

  renderMenuHeaderOptions(){
    if(this.state.opacity > 0){
      return <MenuHeaderOptions viewChange={this.props.viewChange}></MenuHeaderOptions>
    }
  }

  renderHeaderOptions(){
    if(this.state.opacity == 0){
      return <HeaderOptions viewChange={this.props.viewChange}></HeaderOptions>
    }
  }

  renderLoading(){
    if(this.state.isLoading){
      return <Loader/>
    }
  }

  render() {
    return(
      <div>
        <div>{this.renderLoading()}</div>
        <NavBarHeader>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <ReactToPrint
                    trigger={() => {
                      // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                      // to the root node of the returned component as it will be overwritten.
                      return <div className="menu-header-option">CV Download <FontAwesomeIcon icon={faFileDownload} size="1x"/></div>
                    }}
                    content={() => this.componentRef}
                  />
              </Navbar.Brand>
              
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  {this.renderMenuHeaderOptions()}
                </Navbar.Text>
                
                <ReactCountryFlag countryCode={this.state.language.flag} svg style={{width: '2em',height: '2em',}} title={this.state.language.ln}/>
                <NavDropdown title="">
                    <NavDropdown.Item>
                      <ReactCountryFlag onClick={() => { this.handleLanguageChange('de','de') }} countryCode="DE" svg style={{width: '2em',height: '2em',}} title="DE" aria-label="United States"/>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <ReactCountryFlag onClick={() => { this.handleLanguageChange('es','ve') }} countryCode="VE" svg style={{width: '2em',height: '2em',}}title="ES"/>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <ReactCountryFlag onClick={() => { this.handleLanguageChange('en','us') }} countryCode="US" svg style={{width: '2em',height: '2em',}}title="EN"/>
                    </NavDropdown.Item>
                  </NavDropdown>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </NavBarHeader>
        <Header>
          <IntroVideo src={video_url} autoPlay loop playsInline muted>
            Tu navegador no admite el elemento <code>video</code>.
          </IntroVideo>
          {this.renderHeaderOptions()}
        </Header>
        <Curriculum ref={el => (this.componentRef = el)} info={this.state.content}/>
      </div>
    )
  }
}

export default MainPage;