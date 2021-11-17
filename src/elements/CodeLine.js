import {Marker, Code} from '../elements/Styles'
const CodeLine = (props) => {
  return (
    <div>
      <Marker>{props.title}</Marker>
      <Code contentEditable={ props.idx >= props.limit ? true : false} 
            tabIndex="0" 
            onKeyUp={props.onKeyUpRelesead}>
        {props.content}
      </Code>
    </div>
  )
}
export default CodeLine;