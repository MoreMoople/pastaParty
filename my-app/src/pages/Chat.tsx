import React, { useState } from 'react';
import '../styles/Chat.css';

interface Conversation {
    id: number;
    type: 'group' | 'private';
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    unreadCount?: number;
}

interface Message {
    id: number;
    senderName: string;
    senderAvatar: string;
    text: string;
    timestamp: string;
    isMe: boolean;
}

const MOCK_CONVERSATIONS: Conversation[] = [
    {
        id: 1,
        type: 'group',
        name: 'Sunday Family Dinner 🍝',
        avatar: 'https://i.postimg.cc/RCs8hSHn/pastaparty.jpg',
        lastMessage: 'Jane Dough: Don\'t forget to bring the grated parmesan!',
        timestamp: '5m ago',
        unreadCount: 2
    },
    {
        id: 2,
        type: 'group',
        name: 'Hacks for Humanity',
        avatar: 'https://i.postimg.cc/1X2VV19z/hacksforhumanity.jpg',
        lastMessage: 'Emma: We\'ve got this!!',
        timestamp: '1h ago'
    },
    {
        id: 3,
        type: 'private',
        name: 'Bestie',
        avatar: 'https://i.postimg.cc/R0HsWv4W/profile4.jpg',
        lastMessage: 'Are we still meeting up for coffee tomorrow morning?',
        timestamp: 'Yesterday'
    }
];

const MOCK_MESSAGES: Message[] = [
    {
        id: 1,
        senderName: 'Jane Dough',
        senderAvatar: 'https://i.postimg.cc/xdzxX9nf/profile7.jpg',
        text: 'Hello dear! I am getting everything prepped for Sunday. Are you making the garlic bread?',
        timestamp: '4:15 PM',
        isMe: false
    },
    {
        id: 2,
        senderName: 'You',
        senderAvatar: 'https://i.postimg.cc/V6P7M2km/profile5.jpg',
        text: 'Hey! Yes, absolutely. I will grab a few fresh loaves from the bakery down the street.',
        timestamp: '4:18 PM',
        isMe: true
    },
    {
        id: 3,
        senderName: 'Jane Dough',
        senderAvatar: 'https://i.postimg.cc/xdzxX9nf/profile7.jpg',
        text: 'Wonderful! Don\'t forget to bring the grated parmesan too, we are completely out! ❤️',
        timestamp: '5:04 PM',
        isMe: false
    }
];

export const Chat: React.FC = () => {
    const [activeChat, setActiveChat] = useState<number>(1);

    return (
        <div className="chat-layout-wrapper">
            {/* Left Sidebar: Rooms list */}
            <aside className="chat-sidebar">
                <div className="sidebar-header">
                    <h2>My Channels</h2>
                    <button className="create-chat-btn">+ New Chat</button>
                </div>

                <div className="conversations-list">
                    {MOCK_CONVERSATIONS.map((chat) => (
                        <div 
                            key={chat.id} 
                            className={`chat-item-row ${activeChat === chat.id ? 'active-chat-row' : ''}`}
                            onClick={() => setActiveChat(chat.id)}
                        >
                            <img src={chat.avatar} alt={chat.name} className="chat-item-avatar" />
                            <div className="chat-item-body">
                                <div className="chat-item-meta">
                                    <span className="chat-item-name">{chat.name}</span>
                                    <span className="chat-item-time">{chat.timestamp}</span>
                                </div>
                                <p className="chat-item-preview">{chat.lastMessage}</p>
                            </div>
                            {chat.unreadCount && (
                                <span className="unread-badge">{chat.unreadCount}</span>
                            )}
                        </div>
                    ))}
                </div>
            </aside>

            {/* Right Side: Chat Box interface */}
            <main className="chat-window">
                {/* Active Chat Header */}
                <header className="chat-window-header">
                    <div className="active-chat-info">
                        <h3>Sunday Family Dinner 🍝</h3>
                        <p>Group Chat • 5 members</p>
                    </div>
                </header>

                {/* Conversation message stream list */}
                <div className="chat-messages-stream">
                    {MOCK_MESSAGES.map((msg) => (
                        <div key={msg.id} className={`message-bubble-wrapper ${msg.isMe ? 'msg-me' : 'msg-them'}`}>
                            {!msg.isMe && (
                                <img src={msg.senderAvatar} alt={msg.senderName} className="msg-avatar" />
                            )}
                            <div className="message-content-box">
                                {!msg.isMe && <span className="msg-sender-name">{msg.senderName}</span>}
                                <div className="message-bubble">
                                    <p>{msg.text}</p>
                                    <span className="msg-timestamp">{msg.timestamp}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chat text input footer component area */}
                <footer className="chat-input-bar">
                    <input 
                        type="text" 
                        placeholder="Type a message into the kitchen..." 
                        className="message-text-input" 
                        disabled
                    />
                    <button className="send-message-btn" disabled>Send</button>
                </footer>
            </main>
        </div>
    );
};

export default Chat;
