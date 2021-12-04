import {SubTitle, Information} from './styles'
const Skills = (props) => {
  const listItems = props.skills.map((skill,i) =>
    <p>᳁ {skill}</p>
  );
  return (
    <div>
      <SubTitle>{props.title}</SubTitle>
      <Information>
        {listItems}
      </Information>
    </div>
  )
}
export default Skills;