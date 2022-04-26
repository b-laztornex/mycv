import {MenuHeaderBar} from './styles'
import { faUserTie, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuHeaderOptions = ({viewChange}) => {
  return (
    <MenuHeaderBar>
      <div className="menu-header-option"><FontAwesomeIcon icon={faUserTie} size="1x"/></div>
      <div className="menu-header-option"><FontAwesomeIcon icon={faTerminal} size="1x" onClick={()=>{viewChange(2)}}/></div>
    </MenuHeaderBar>
  )
}
export default MenuHeaderOptions;