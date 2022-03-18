import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createComment } from "./commentManager"


export const CommentForm = () => {
	const { deckId } = useParams()

	const [currentComment, setCurrentComment] = useState({
		comments: "",
		player_id: "",
		deck_id: deckId,
	})
	const history = useHistory()

	const handleAddComment = (domEvent) => {
		const copy = { ...currentComment }
		copy[domEvent.target.name] = domEvent.target.value
		setCurrentComment(copy)
	}

	return (
		<>
			
				
						<div className='card-content'>
							<h1 className='title'>Post a New Comment</h1>
							<form className='commentForm'>
								<fieldset className='field'>
									<label className='label'>Comment</label>
									<div className='control'>
										<textarea
											name='comments'
											className='form-control'
											value={setCurrentComment.comments}
											onChange={handleAddComment}
											placeholder='Add your comment'></textarea>
									</div>
								</fieldset>
								
										<button
											className='button is-link is-dark'
											type='submit'
											onClick={(evt) => {
												evt.preventDefault()
												const newComment = {
													comment:
														currentComment.comments,
													player_id:
														localStorage.getItem(parseInt('playerId')),
													deck_id:
														currentComment.deck_id,
												}
												createComment(newComment).then(
													() =>
														history.push(
															`/decks/${deckId}`
														)
												)
											}}>
											Post Comment
										</button>
									
							</form>
						</div>
					
			
		</>
	)
}