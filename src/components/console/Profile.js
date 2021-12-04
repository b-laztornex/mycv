import {SubTitle, Information} from './styles'
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