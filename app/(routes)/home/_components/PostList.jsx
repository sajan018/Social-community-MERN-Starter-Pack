import React from 'react';
import PostItem from './PostItem';

function PostList({ postList ,updatePostList }) {
  return (
    <div>
      {postList ? (
        postList.map((item, index) => (
          <div key={index}>
            <PostItem post={item} updatePostList={()=>updatePostList()} />
          </div>
        ))
      ) : (
        <div>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="h-[200px] w-full bg-slate-300 opacity-80 animate-pulse my-5 rounded-lg"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
