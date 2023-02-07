import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import GoldenLines from '../../assets/lines.png';
import PostIndividual from '../../assets/post-ind-img-2.png';
import { PostBackground, PostContainer } from './style';

function Post({post}) {

  const [pathNameState, SetPathNameState] = useState();

  useEffect(() => {
    const pathName = window.location.pathname;
  
    console.log(pathName, 'PATH NAME');
    if(pathName.includes(post.slug)){
      SetPathNameState(true)
    }
  }, [pathNameState])
  
  console.log(pathNameState, 'FORA USEEFFECT')

  return (
    <PostContainer>
        <PostBackground imgUrl={post.imgPost.url}>
          <h1>{post.title}</h1>
          <div className='golden_line_post'>
            <Image src={GoldenLines} fill/>
          </div>
          <div className='layer__bg'></div>
        </PostBackground>

        <div className='post__txt'>
          <div className='post__txt__img'>
            <Image src={PostIndividual} alt="asset" fill/>
          </div>
          <div className='post__txt__container'>
            <div className='post__txt__top'>
              <ReactMarkdown className='post__content'>{post.content}</ReactMarkdown>
              <div className='post__img_small'>
                <Image src={post.imgPost.url} fill/>
              </div>
            </div>
            <div className='golden_line_post'>
              <Image src={GoldenLines} />
            </div>
          </div>
        </div>
    </PostContainer>
  )
}

export default Post