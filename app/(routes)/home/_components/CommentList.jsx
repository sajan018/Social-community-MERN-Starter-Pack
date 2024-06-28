import { MoreVertical } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { UserDetailContext } from '../../../_context/userDetailContext'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../shadCN/components/ui/popover"
import GlobalApi from '../../../_utils/GlobalApi'
  

function CommentList({ commentList , updatePostList}) {
    const {userDetail , setUserDetail} = useContext(UserDetailContext);
    const [commentListData , setCommentListData] = useState(commentList);
    const onDeleteComment =(comment)=>{
        const result = commentListData.filter(item=>item._id!=comment._id)
        setCommentListData(result);
        GlobalApi.deleteComment(comment._id).then(resp=>{
            if(resp){
                alert('deleted successfully')
            }
        })
        updatePostList();
    }
    return (
        <div>
            {
                commentListData.map((item, index) => (
                    <div key={index} className='flex p-3 border rounded-lg m-2 items-center justify-center'>
                        <div className='flex items-center w-full gap-3'>
                            {/* <Image src={item?.createdBy?.image} width={30} height={30} alt='user-image' /> */}
                            <div className='w-10 h-10 text-white font-mono text-2xl bg-yellow-600 rounded-full flex justify-center items-center'>
                                {item?.createdBy?.name ? item.createdBy.name.charAt(0) : ''}
                            </div>
                            <h2 className='bg-slate-100 p-2 rounded-full'>{item.commentText}</h2>
                        </div>
                      {(item.createdBy?._id===userDetail?._id) && 
                      <Popover>
                      <PopoverTrigger>
                      <MoreVertical className='h-5 w-5 cursor-pointer'/>
                      </PopoverTrigger>
                      <PopoverContent>
                       <button className='w-full flex justify-center items-center'
                       onClick={()=>onDeleteComment(item)}>Delete</button> 
                        </PopoverContent>
                    </Popover>
                    
                      }  
                    </div>
                ))
            }
        </div>
    )
}

export default CommentList
