// Message component, renders a single message. Depending on sender, it will be rendered on the left or right side of the screen
export const Message = ({ message, sender }) => {
	return (
		<>
			<div
				className={`bg-gradient-to-r from-blue-800 to-blue-900  shadow-2xl text-white rounded-3xl  max-w-[60%] min-w-[4rem] px-4 py-2  break-words
							${
								sender === 'me'
									? 'self-end rounded-tr-none fade-in-right'
									: 'self-start rounded-tl-none fade-in-left'
							} `}
			>
				{message.split('\n').map((line, i) => {
					return (
						<span key={i}>
							{line}

							<br />
						</span>
					);
				})}
			</div>
		</>
	);
};
