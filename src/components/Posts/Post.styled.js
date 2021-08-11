import styled from 'styled-components';

export const PostsContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-bottom: 16vw;
`;

export const PostH1 = styled.h1`
  font-size: clamp(1.2rem, 5vw, 1.7rem);
  font-family: 'Poppins Light';
  color: #102746;
  position: relative;
  width: 100%;
  margin: 0;
  margin-bottom: 18px;

  &::after {
    content: "";
    height: 2px;
    width: 200px;
    background-color: #006DFE;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    text-align: center;

    &::after {
      display: none;
    }
  }
`;

export const PostsListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 12rem;
  grid-gap: 8rem 0.5rem;

  @media screen and (max-width: 768px) {
    display: flex;
    text-align: center;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 0;
  }
`;

export const PostImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 24px 0 18px 0;
  object-fit: cover;
  -o-object-fit: cover;
  @media screen and (max-width: 768px) {
    margin: 28px 0 10px 0;
  }
`;

export const PostImg = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 54px;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 20px;

  @media screen and (max-width: 768px) {
    bottom: 6px;
  }
`;

export const PostName = styled.p``;

export const CommentLikeWrapper = styled.div`
  display: flex;
`;

export const PostLike = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

export const LikeCount = styled.p`
  margin: 0;
  margin-right: 5px;
`;

export const PostComment = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

export const CommentCount = styled.p`
  margin: 0;
  margin-right: 5px;
`;

export const PostDescription = styled.div`
  font-size: 12px;
  color: #102746;
`;