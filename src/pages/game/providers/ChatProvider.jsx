import React, { useState, useEffect, createContext, useContext } from 'react';
import CHAT_CONFIG from '../views/chat/chat.config.js';

const chatContext = createContext({});
const chatToggleContext = createContext({});

export function ChatProvider({ children }) {
	const [messages, setMessages] = useState([
		CHAT_CONFIG.flow.welcome_message,
	]);
	const [chat, setChat] = useState({
		config: { ...CHAT_CONFIG },
		messages: messages,
	});

	const addMessage = (message = {}) => {
		setMessages((prevMessages) => [...prevMessages, message]);
	};

	const addUserMessage = (message = {}) => {
		addMessage(message);
	};

	const getLastDynamoMessage = () => {
		const dynamoMessages = messages.filter(
			(message) => message.meta.sender === 'dynamo'
		);
		const lastMessage = dynamoMessages[dynamoMessages.length - 1];
		return lastMessage;
	};

	const deactivateLastDynamoMessage = () => {
		try {
			const lastDynamoMessage = getLastDynamoMessage();

			if (lastDynamoMessage && lastDynamoMessage.meta.active) {
				const updatedMessage = {
					...lastDynamoMessage,
					meta: { ...lastDynamoMessage.meta, active: false },
				};

				setMessages((prevMessages) =>
					prevMessages.map((msg) =>
						msg === lastDynamoMessage ? updatedMessage : msg
					)
				);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const addFollowingDynamoMessage = () => {
		const lastDynamoMessage = getLastDynamoMessage();
		const newMessage = CHAT_CONFIG.flow[lastDynamoMessage.meta.next];
		addMessage(newMessage);
	};

	useEffect(() => {
		setChat((prevChat) => ({
			...prevChat,
			messages: messages,
		}));
	}, [messages]);

	return (
		<chatContext.Provider value={chat}>
			<chatToggleContext.Provider
				value={{
					addUserMessage: addUserMessage,
					addFollowingDynamoMessage: addFollowingDynamoMessage,
					deactivateLastDynamoMessage: deactivateLastDynamoMessage,
					getLastDynamoMessage: getLastDynamoMessage,
				}}>
				{children}
			</chatToggleContext.Provider>
		</chatContext.Provider>
	);
}

export const useChatContext = () => useContext(chatContext);
export const useChatToggleContext = () => useContext(chatToggleContext);
