import {SubTitle, Information} from './styles'
const json_commands = require('../data/commands.json');
const ConsoleBox = () => {
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

  return (
    <div>
      <SubTitle>Help</SubTitle>
      <Information>
        {listItems}
      </Information>
    </div>
  )
}
export default ConsoleBox;