import {MenuCenter,IconBorder} from './styles'
import { faWrench, faBriefcase, faBook, faUserTie, faFileDownload, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderOptions = ({viewChange}) => {
  return (
    <MenuCenter className="menu-icon-box">
      <IconBorder className="icon-border"><FontAwesomeIcon icon={faWrench} size="2x"/></IconBorder>
      <IconBorder className="icon-border"><FontAwesomeIcon icon={faBriefcase} size="2x"/></IconBorder>
      <IconBorder className="icon-border"><FontAwesomeIcon icon={faBook} size="2x"/></IconBorder>
      <IconBorder className="icon-border"><FontAwesomeIcon icon={faUserTie} size="2x"/></IconBorder>
      <IconBorder className="icon-border"><FontAwesomeIcon icon={faFileDownload} size="2x"/></IconBorder>
      <IconBorder className="icon-border" onClick={()=>{this.viewChange(2)}}>
        <FontAwesomeIcon icon={faTerminal} size="2x"/>
      </IconBorder>
      <div className="arrows arrows-first"></div>
    </MenuCenter>
  )
}
export default HeaderOptions;