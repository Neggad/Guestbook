import React, { useState, useEffect, useCallback } from 'react'
import PostsComponent from './PostsComponent'
import PostFormComponent from './PostFormComponent'
import { ButtonComponent, Sizes } from './ButtonComponent'
import guestbookPosts from '../tempGuestPost'
import '../App.css'
export default function MainComponent({ auth }) {
  const login = () => {
    auth.login();
  }
  const { isAuthenticated } = auth;
  const [postForm, togglePostForm] = useState(true);
  const [name, addPostName] = useState('');
  const [surName, addPostSurName] = useState('');
  const [postContent, addPostText] = useState('');
  const [posts, allPosts] = useState(guestbookPosts)
  const handleAddPostName = (e) => {
    addPostName(e)
  }
  const handleAddPostSurName = (e) => {
    addPostSurName(e)
  }
  const handleAddPostText = (e) => {
    addPostText(e)
  }

  const handleLikePost = (id, nrOfLikes) => {
    console.log("handle likes", posts, "id:", id, "#:", nrOfLikes)
    if (posts[id]) {
      allPosts((posts) => {
        posts[id].likes = nrOfLikes;
        return (posts)
      })
    }
  }

  useEffect(() => {
    allPosts(posts)
    console.log(posts)
  }, [posts])

  const handleToggleForm = () => {
    postForm ? togglePostForm(false) : togglePostForm(true)
  }

  const clickHandler = useCallback(async () => {
    const response = await (await fetch('api/SampleData/WeatherForecasts', {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      // body: JSON.stringify(response)
    })).json()
    console.log(response)
  }, [])

  const handleSubmitPost = () => {
    console.log(posts.length)
    let newPost = { "id": posts.length + 1, "first_name": name, "last_name": surName, "content": postContent, "likes": 0 };
    let obj = posts;
    obj.push(newPost);

    allPosts(obj)
    addPostName('')
    addPostSurName('')
    addPostText('')
  }
  return (
    <div className='mainComponent'>
      <div className='logoImage'>
        <img src='https://picsum.photos/300/300' onClick={clickHandler} alt="Nothing here" />
      </div>
      <h3>Guest book</h3>
      {!isAuthenticated() && (
        <h5>You are not logged in Please{' '}
          <a onClick={login}>Log In</a>{' '}
        </h5>)
      }

      {postForm && isAuthenticated() ?
        <PostFormComponent name={name}
          surName={surName}
          postContent={postContent}
          addNameHandler={handleAddPostName}
          addSurNameHandler={handleAddPostSurName}
          addPostTextHandler={handleAddPostText}
          submitPostHandler={handleSubmitPost} />
        : <div></div>}
      {isAuthenticated() ?
        <div className='toggleButtonContainer'>
          <ButtonComponent Size={Sizes.THIN} onclickFunc={handleToggleForm}>
            {postForm ?
              <span>Hide Form</span>
              : <span>Show form</span>}
          </ButtonComponent>
        </div>
        : <div></div>}

      <div className='postContainer'>
        {posts ? posts.slice(0).reverse().map((post) =>
          <PostsComponent f_name={post.first_name}
            l_name={post.last_name}
            content={post.content}
            likes={post.likes}
            key={post.id}
            id={post.id}
            likePost={() => handleLikePost} />)
          : <div></div>}
      </div>


    </div>)
}
