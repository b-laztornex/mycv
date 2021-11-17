import {SubTitle, Information} from '../elements/Styles'
const Profile = (props) => {
  return (
    <div>
      <SubTitle>{props.title}</SubTitle>
      <Information>
        {props.content}
      </Information>
    </div>
  )
}
export default Profile;