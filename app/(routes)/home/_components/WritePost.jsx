'use client'
import { useUser } from '@clerk/nextjs'
import { Image, Send, Video } from 'lucide-react'
import React, { useContext, useState } from 'react'
import GlobalApi from '../../../_utils/GlobalApi'
import { UserDetailContext } from '../../../_context/userDetailContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function WritePost({getAllPost}) {
  const { user } = useUser()
  const [userInputPost, setUserInputPost] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const onCreatePost = () => {
    const data = {
      postText: userInputPost,
      createdAt: Date.now().toString(),
      createdBy: userDetail._id,
    }
    GlobalApi.createPost(data).then(resp => {
      console.log((resp));
      setUserInputPost('');
      toast.success("Post created successfully!"); // Show success toast message
      if(resp){
getAllPost()
      }
    }).catch(error => {
      console.error(error);
      toast.error("Failed to create post."); // Show error toast message
    })
  }
  
  return (
    <div>
      <h2 className='text-[30px] font-medium text-gray-600'> Hello , {user.fullName}</h2>
      <h2 className='text-gray-400'>What's New with You ? Would you like to share something with community.</h2>
      <div className='p-3 border rounded-lg mt-2 bg-slate-100'>
        <h2>Create Post</h2>
        <div className='p-4 bg-white rounded-lg mt-2'>
          <textarea placeholder="What's new" className='outline-none w-full'
            required
            value={userInputPost}
            onChange={(e) => setUserInputPost(e.target.value)}></textarea>
        </div>
        <div className='mt-2 flex justify-between'>
          <div className='flex gap-5'>
            <h2 className='flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg'><Image /> Image</h2>
            <h1 className='flex gap-2 items-center cursor-pointer hover:bg-slate-200 p-2 rounded-lg'><Video /> Video</h1>
          </div>
          <button className='bg-lime-500 rounded-md p-2 mt-3  px-3 text-white flex items-center justify-center gap-2'
            disabled={userInputPost?.length===0}
            onClick={() => onCreatePost()}><Send className='h-4 w-4' />Publish </button>
        </div>
      </div>
      <ToastContainer /> {/* Add the ToastContainer to render toasts */}
    </div>
  )
}

export default WritePost
