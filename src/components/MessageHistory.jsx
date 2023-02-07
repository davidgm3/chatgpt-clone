import { useEffect, useState } from 'react';
import { Message } from './Message';

//receives the message history from the parent component, renders the messages
export const MessageHistory = ({ messageHistory }) => {
	//scrolls to the bottom of the message history when a new message is added
	useEffect(() => {
		const me = document.getElementById('message-history');
		me.scrollTo({
			left: 0,
			top: me.scrollHeight,
			behavior: 'smooth',
		});
	}, [messageHistory]);
	return (
		<div
			id='message-history'
			className='w-full p-4  flex flex-col gap-3 overflow-y-auto overflow-x-hidden h-11/12 flex-grow container'
		>
			{messageHistory.map(({ text, sender }, i) => {
				return <Message message={text} sender={sender} key={i} />;
			})}
		</div>
	);
};
