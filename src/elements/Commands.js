import {SubTitle, Information} from '../elements/Styles'
const json_commands = require('../data/commands.json');
const Commands = () => {
  const listItems = json_commands.commands.map((cmd,i) =>
    <div>
      <p>{cmd} </p>
    </div>
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
export default Commands;