import {SubTitle, Information} from './styles'
const Experience = (props) => {
  const listItems = props.data.map((exp,i) =>
    <div>
      <p>{exp.date} {exp.company_name} {exp.country} {exp.city} </p>
      <p>ଏ{exp.position}</p>
    </div>
  );
  return (
    <div>
      <SubTitle>Experience</SubTitle>
      <Information>
        {listItems}
      </Information>
    </div>
  )
}
export default Experience;