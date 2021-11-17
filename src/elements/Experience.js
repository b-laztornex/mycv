import {SubTitle, Information} from '../elements/Styles'
const Experience = (props) => {
  const listItems = props.data.content.map((exp,i) =>
    <div>
      <p>{exp.date} {exp.company_name} {exp.country} {exp.city} </p>
      <p>ଏ{exp.position}</p>
    </div>
  );
  return (
    <div>
      <SubTitle>{props.data.txt}</SubTitle>
      <Information>
        {listItems}
      </Information>
    </div>
  )
}
export default Experience;