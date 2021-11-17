import React from 'react'
import styled from 'styled-components';
import Player from './Player';
import CodeLine from '../elements/CodeLine'
import Profile from '../elements/Profile'
import Commands from '../elements/Commands'
import Experience from '../elements/Experience'
import Skills from '../elements/Skills'
import ProfileImage from '../elements/ProfileImage'

const Wrapper = styled.div`
  padding: 4em;
  font-size: 14px;
  background: black;
`;
const Terminal = styled.ul`
  color: white;
  padding-left: 0;
  text-align: left;
  list-style-type: none;
`;
const Title = styled.h4`
  color: white;
  text-align: justify;
`;

const ln = {
  es: require('../data/cv_es.json'),
  en: require('../data/cv_en.json'),
  de: require('../data/cv_de.json')
};

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyUpRelesead = this.onKeyUpRelesead.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);

    this.state = {ln: 'en', lines: [ {type: 'line', txt: 'blaztornex@127.0.0.1~-$', content: '\u00A0'}]};
  }

  handleLanguageChange(newlang) {
    this.setState({ ln: newlang });
    //this.props.i18n.changeLanguage(newlang);
  };

  onKeyUpRelesead(e) {
    let list_cmd = [];
    if (e.key === 'Enter') {
      const command_line = e.target.innerText.trim();
      const command = command_line.split(" ").at(-1);
      const options = ["profile", "skills", "experience", "profile_image","help"];
      const languages = ["en", "es", "de"];
      
      const localeData = ln[this.state.ln];

      if (options.includes(command)) {
        list_cmd.push({type: command, txt: command, content: localeData[command]});
      }
      if (languages.includes(command)) {
        this.handleLanguageChange(command);
      }
      list_cmd.push({type: 'line', txt: 'blaztornex@127.0.0.1~-$', content: '\u00A0'});
      this.setState({lines: this.state.lines.concat(list_cmd)},
      () => {
        var el = document.querySelectorAll("li:last-child");
        el[0].lastChild.focus();
      });
    }
  }

  componentDidMount() {
    var el = document.querySelectorAll("li:last-child");
    el[0].lastChild.focus();
  }

  componentWillUnmount() {
  }

  render() {
    const listItems = this.state.lines.map((line,i) =>
        <li key={'li' + i}>
          {(() => {
            switch(line.type) {
              case 'line':
                return <CodeLine onKeyUpRelesead={this.onKeyUpRelesead} title={line.txt} idx={i} content={line.content} limit={this.state.lines.length - 1}/>
              case 'profile':
                return <Profile title={line.txt} content={line.content}/>
              case 'skills':
                return <Skills title={line.txt} skills={line.content} />
              case 'profile_image':
                return <ProfileImage title={line.txt}/>
              case 'experience':
                return <Experience data={line}/>
              case 'help':
                return <Commands/>
              default:
                return <CodeLine data={line} />
            }
          })()}
        </li> 
    );

    console.log('this.state.lines',this.state.lines)
    return (
      <Wrapper>
        <Player url="../music/another_world_remix.mp3"/>
        <Title>
          Last login: Thu Nov 11 11:07:51 on ttys002
          The default interactive shell is now zsh.
          To update your account to use zsh, please run `chsh -s /bin/zsh`.
          For more details, please visit https://support.apple.com/kb/HT208050.
          ____________________________________________________________________
          -l list all comands
        </Title>
        <Terminal >
          {listItems}
        </Terminal>
    </Wrapper>
    );
  }
}

export default Console;
