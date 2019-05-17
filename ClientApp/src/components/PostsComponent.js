import React, { useState, useEffect } from 'react'
import { ButtonComponent, Sizes, Types } from './ButtonComponent';
import Icon from './Icon'
export default function PostsComponent({ f_name, l_name, content, likes, likePost, id }) {

  const [liked, toggleLike] = useState(false);
  const [nrOfLikes, editLikes] = useState(likes);

  const handleToggleLike = () => {
    if (liked) {
      toggleLike(false);
      editLikes(nrOfLikes - 1);
    }
    else {
      toggleLike(true);
      editLikes(nrOfLikes + 1);
    }
    console.log("likes", likes)
  }

  useEffect(() => {
    likePost(id, nrOfLikes)
  }, [nrOfLikes, likePost]
  )

  return (
    <div className='post'>
      <div className='postHeader'>
        <div className='leftHeader'>
          <span className='postAuthor'>{f_name} {l_name}</span>
        </div>
        <div className='rightHeader'>
          <ButtonComponent onclickFunc={handleToggleLike} Type={Types.TRANSP} Size={Sizes.EXTRA_SMALL}>
            <span className='likeBtnContent'>
              <Icon opacity={liked ? 'opaqueIcon' : 'hiddenIcon'} symbol='👍' />
              {nrOfLikes}
            </span>
          </ButtonComponent>

        </div>
      </div>
      <span>{content}</span>
    </div >)
}
