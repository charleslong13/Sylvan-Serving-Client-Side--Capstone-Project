import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { deleteComment, getComments, getCommentsByDeckId } from "./commentManager"


export const CommentList = () => {
	const [comments, setComments] = useState([])
	const { deckId } = useParams()

	useEffect(() => {
		getCommentsByDeckId(deckId).then(setComments)
	}, [])

   
	return (
		<>
       
			{comments?.map((comment) => {

				return  comments? (
					<div
                     
						key={`comment--${comment.id}`}>
						<ol><div className='card-content' style={{background: "#2e8b57"}}>{comment?.comments}</div>
						<div className='card-content' style={{background: "#2e8b57"}}>By {comment.player?.user.username} <p></p>{comment.player.id === parseInt(localStorage.getItem("playerId")) ?
                                    <button  type="button" className="btn btn-primary"onClick={() => { deleteComment(comment.id).then(() => getComments().then(setComments) )}}>Delete</button>
                                    : ""}</div></ol>
						
					</div>
				)
                : ""
			})} 
		</>
	) 
}