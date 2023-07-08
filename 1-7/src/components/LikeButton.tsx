import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
interface Props {
  likeClicked: () => void;
}

function LikeButton({ likeClicked }: Props) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    likeClicked();
  };
  return (
    <>
      {status ? (
        <BsHeartFill color="red" onClick={toggle} />
      ) : (
        <BsHeart onClick={toggle} />
      )}
    </>
  );
}

export default LikeButton;
