import React, { useEffect, useState } from 'react';
import { MdModeComment } from 'react-icons/md';
import { BsHeartFill } from 'react-icons/bs';

import { API_URL, AUTHORIZATION } from '../../config';
import { titleSection } from './../../constant/titleSections';
import { 
  PostsContainer,
  PostH1,
  PostsListWrapper,
  PostImageWrapper,
  PostImg,
  PostInfo,
  PostName,
  CommentLikeWrapper,
  PostLike,
  LikeCount,
  PostComment,
  CommentCount,
  PostDescription
} from './Post.styled';

const Posts = () => {
  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    _handleFetchData();
  }, [])

  const _handleFetchData = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": AUTHORIZATION
      },
      body: JSON.stringify({
        query: `
          query QueryType {
            posts {
              data {
                body {
                  text
                }
                thumbnail {
                  file_name
                  url
                }
                title
                total_comments
                total_likes
              }
            }
          }
        `
      })
    })
    .then(res => res.json())
    .then(data => {
      setListPost(data.data.posts);
    })
  };


  return (
    <PostsContainer>
      <PostH1>{titleSection.postsTitle}</PostH1>
      <PostsListWrapper>
        {
          listPost.length > 0 && listPost.map((item, idx) => {
            return (
              <div className="post-list" key={idx}>
                <PostImageWrapper>
                  <PostImg src={item.data.thumbnail.url} alt={item.data.thumbnail.file_name} />
                  <PostInfo>
                    <PostName>{item.data.title}</PostName>
                    <CommentLikeWrapper>
                      <PostLike>
                        <LikeCount>{item.data.total_likes}</LikeCount>
                        <BsHeartFill />
                      </PostLike>
                      <PostComment>
                        <CommentCount>{item.data.total_comments}</CommentCount>
                        <MdModeComment />
                      </PostComment>
                    </CommentLikeWrapper>
                  </PostInfo>
                </PostImageWrapper>
                <PostDescription>{item.data.body.text}</PostDescription>
              </div>
            )
          })
        }
      </PostsListWrapper>
    </PostsContainer>
  )
}

export default Posts;
