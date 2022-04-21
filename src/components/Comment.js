
import CommentWrapper from '../UI/CommentWrapper';
import CommentDate from './CommentDate';
import UserInfo from './UserInfo';


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />

      <CommentWrapper className="Comment-text">{props.text}
      <CommentDate date={props.date} /></CommentWrapper>
    </div>
  );
}
export default Comment;