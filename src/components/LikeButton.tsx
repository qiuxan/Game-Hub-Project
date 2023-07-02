import { BsHeart, BsHeartFill } from "react-icons/bs";
interface Props {
  liked: boolean;
  likeClicked: () => void;
}
function LikeButton({ liked, likeClicked }: Props) {
  return (
    <>
      {liked ? (
        <BsHeartFill color="red" onClick={likeClicked} />
      ) : (
        <BsHeart onClick={likeClicked} />
      )}
    </>
  );
}

export default LikeButton;
