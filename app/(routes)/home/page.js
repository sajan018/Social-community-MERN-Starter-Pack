'use client'
import React from 'react'
import Banner from './_components/Banner'
import { useUser } from '@clerk/nextjs'
import WritePost from './_components/WritePost'
import PostList from './_components/PostList'
import { useState , useEffect } from 'react'
import GlobalApi from '../../_utils/GlobalApi'
function Home() {
  const {user} = useUser();
  const [postList,setPostList] = useState([]);
  useEffect(()=>{
      getAllPost();
  },[])
  const getAllPost =()=>{
      GlobalApi.getAllPost().then(resp=>{
          
          setPostList(resp.data)
      })
  }
  return (
    <div className='p-5'>
      {!user ? <Banner/>
      :<WritePost getAllPost={()=>getAllPost()}/>
      }
      <PostList postList={postList} updatePostList={()=>getAllPost()}/>
    </div>
  )
}

export default Home