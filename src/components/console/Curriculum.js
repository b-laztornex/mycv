import Profile from './Profile'
import Experience from './Experience'
import Skills from './Skills'

const Curriculum = (props) => {
  return (
    <div>
      <Profile title={'profile'} content={props.info.content.profile}/>
      <Skills title={'skills'} skills={props.info.content.skills} />
      <Experience title={'experience'} data={props.info.content.experience}/>
    </div>
  )
}
export default Curriculum;