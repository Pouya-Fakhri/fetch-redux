import React from 'react'

function Post({body , title , id}) {
 
    
  return (
    <div id={id} className='post' >
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  )
}

export default Post
