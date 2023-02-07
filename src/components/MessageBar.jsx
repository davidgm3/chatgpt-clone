import iconSend from '../assets/icon-send.png';
import { useState, useRef, useEffect, useReducer } from 'react';
import loading from '../assets/loading.svg';
export const MessageBar = ({ onNewMessage, disabled }) => {
	const [message, dispatchMessage] = useReducer(messageReducer, '');

	//reducer for message
	function messageReducer(state, action) {
		switch (action.type) {
			case 'set':
				return action.payload;
			case 'reset':
				return '';
			default:
				return state;
		}
	}
	const resetMessage = () => {
		dispatchMessage({ type: 'reset' });
	};
	const setMessage = (message) => {
		dispatchMessage({ type: 'set', payload: message });
	};

	//ref for textarea
	const textAreaRef = useRef();
	//resizes textarea to fit content, called on input
	const resize = () => {
		textAreaRef.current.style.height = 'inherit';
		textAreaRef.current.style.height =
			textAreaRef.current.scrollHeight + 'px';
	};

	//whenever message changes, resize textarea
	useEffect(() => {
		resize();
	}, [message]);

	//try to send message, if message is not empty newmessage is sent and
	//message is reset
	const tryNewMessage = () => {
		if (message.trim() !== '') {
			onNewMessage(message);
			resetMessage();
		}
	};

	return (
		<div className='flex p-4 justify-start gap-2 items-start container'>
			<textarea
				ref={textAreaRef}
				rows={1}
				className='bg-gradient-to-r from-blue-800 to-blue-900 px-4 py-2 text-white rounded-md w-full resize-none overflow-hidden h-auto outline-none focus:shadow-2xl  duration-300 ease-in-out'
				type='text'
				placeholder='Enter your message'
				onInput={(e) => {
					setMessage(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === 'Enter' && e.ctrlKey) {
						tryNewMessage();
					}
				}}
				value={message}
			/>
			<button
				disabled={disabled}
				className='bg-blue-900 rounded-3xl px-6 py-2 font-bold text-lg text-white  -translate-x-0 disabled:bg-slate-600'
				onClick={() => {
					tryNewMessage();
					resetMessage();
				}}
			>
				<img
					src={disabled ? loading : iconSend}
					className={`w-6 h-6 }`}
					alt=''
				/>
			</button>
		</div>
	);
};
