// Real-time Chat Widget
class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.messages = [
            {
                type: 'bot',
                message: '안녕하세요! InnovateTech입니다. 무엇을 도와드릴까요?',
                timestamp: new Date()
            }
        ];
        this.init();
    }
    
    init() {
        this.createWidget();
        this.addEventListeners();
    }
    
    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'chat-widget';
        widget.innerHTML = `
            <div class="chat-button" id="chatButton">
                <i class="fas fa-comments"></i>
                <span class="chat-badge">1</span>
            </div>
            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <div class="chat-header-info">
                        <div class="agent-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="agent-info">
                            <h4>InnovateTech AI</h4>
                            <span class="status online">온라인</span>
                        </div>
                    </div>
                    <button class="chat-close" id="chatClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chat-messages" id="chatMessages">
                    ${this.renderMessages()}
                </div>
                <div class="chat-input-container">
                    <div class="quick-replies">
                        <button class="quick-reply" data-message="서비스 문의">서비스 문의</button>
                        <button class="quick-reply" data-message="견적 요청">견적 요청</button>
                        <button class="quick-reply" data-message="기술 상담">기술 상담</button>
                    </div>
                    <div class="chat-input">
                        <input type="text" id="chatInput" placeholder="메시지를 입력하세요...">
                        <button id="chatSend">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(widget);
        this.addStyles();
    }
    
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .chat-widget {
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 10000;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .chat-button {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 24px;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
                transition: all 0.3s ease;
                position: relative;
            }
            
            .chat-button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
            }
            
            .chat-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #ff4757;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
            }
            
            .chat-window {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 350px;
                height: 500px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                opacity: 0;
                transform: translateY(20px) scale(0.9);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: none;
                display: flex;
                flex-direction: column;
            }
            
            .chat-window.open {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: all;
            }
            
            .chat-header {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 1rem;
                border-radius: 15px 15px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .chat-header-info {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            .agent-avatar {
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }
            
            .agent-info h4 {
                margin: 0;
                font-size: 1rem;
                font-weight: 600;
            }
            
            .status {
                font-size: 0.8rem;
                opacity: 0.9;
            }
            
            .status.online::before {
                content: '●';
                color: #2ed573;
                margin-right: 0.25rem;
            }
            
            .chat-close {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 4px;
                transition: background 0.2s ease;
            }
            
            .chat-close:hover {
                background: rgba(255, 255, 255, 0.1);
            }
            
            .chat-messages {
                flex: 1;
                padding: 1rem;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
            }
            
            .message {
                display: flex;
                gap: 0.5rem;
                max-width: 80%;
                animation: messageSlide 0.3s ease;
            }
            
            .message.user {
                align-self: flex-end;
                flex-direction: row-reverse;
            }
            
            .message-avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                flex-shrink: 0;
            }
            
            .message.bot .message-avatar {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
            }
            
            .message.user .message-avatar {
                background: #f1f3f4;
                color: #5f6368;
            }
            
            .message-content {
                background: #f1f3f4;
                padding: 0.75rem;
                border-radius: 1rem;
                font-size: 0.9rem;
                line-height: 1.4;
            }
            
            .message.user .message-content {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
            }
            
            .message-time {
                font-size: 0.7rem;
                color: #9aa0a6;
                margin-top: 0.25rem;
            }
            
            .quick-replies {
                padding: 0.5rem 1rem 0;
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
            }
            
            .quick-reply {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 1rem;
                padding: 0.4rem 0.8rem;
                font-size: 0.8rem;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .quick-reply:hover {
                background: #e9ecef;
                border-color: #667eea;
            }
            
            .chat-input {
                padding: 1rem;
                display: flex;
                gap: 0.5rem;
                border-top: 1px solid #e9ecef;
            }
            
            .chat-input input {
                flex: 1;
                border: 1px solid #e9ecef;
                border-radius: 1.5rem;
                padding: 0.75rem 1rem;
                font-size: 0.9rem;
                outline: none;
                transition: border-color 0.2s ease;
            }
            
            .chat-input input:focus {
                border-color: #667eea;
            }
            
            .chat-input button {
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s ease;
            }
            
            .chat-input button:hover {
                transform: scale(1.05);
            }
            
            @keyframes messageSlide {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @media (max-width: 480px) {
                .chat-window {
                    width: calc(100vw - 40px);
                    right: -10px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    addEventListeners() {
        const chatButton = document.getElementById('chatButton');
        const chatClose = document.getElementById('chatClose');
        const chatInput = document.getElementById('chatInput');
        const chatSend = document.getElementById('chatSend');
        
        chatButton.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.closeChat());
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        chatSend.addEventListener('click', () => this.sendMessage());
        
        // Quick replies
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply')) {
                const message = e.target.dataset.message;
                this.addMessage('user', message);
                this.handleBotResponse(message);
            }
        });
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatWindow = document.getElementById('chatWindow');
        const chatBadge = document.querySelector('.chat-badge');
        
        if (this.isOpen) {
            chatWindow.classList.add('open');
            chatBadge.style.display = 'none';
        } else {
            chatWindow.classList.remove('open');
        }
    }
    
    closeChat() {
        this.isOpen = false;
        const chatWindow = document.getElementById('chatWindow');
        chatWindow.classList.remove('open');
    }
    
    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (message) {
            this.addMessage('user', message);
            input.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                this.handleBotResponse(message);
            }, 1000);
        }
    }
    
    addMessage(type, message) {
        this.messages.push({
            type,
            message,
            timestamp: new Date()
        });
        this.renderMessages();
    }
    
    handleBotResponse(userMessage) {
        let response = '';
        
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('서비스') || lowerMessage.includes('service')) {
            response = 'InnovateTech는 AI 솔루션, 클라우드 마이그레이션, 데이터 분석 서비스를 제공합니다. 어떤 서비스에 관심이 있으신가요?';
        } else if (lowerMessage.includes('견적') || lowerMessage.includes('price')) {
            response = '프로젝트 견적은 요구사항에 따라 달라집니다. 상세한 상담을 위해 연락처를 남겨주시거나 02-6200-1000으로 연락해주세요.';
        } else if (lowerMessage.includes('기술') || lowerMessage.includes('tech')) {
            response = '저희는 AWS, Azure 클라우드 플랫폼과 Python, TensorFlow 등을 활용한 AI 기술에 특화되어 있습니다. 구체적으로 어떤 기술이 궁금하신가요?';
        } else if (lowerMessage.includes('연락') || lowerMessage.includes('contact')) {
            response = '📞 전화: 02-6200-1000<br>📧 이메일: contact@innovatetech.co.kr<br>📍 주소: 서울 강남구 테헤란로 521 파르나스타워 35층';
        } else {
            response = '궁금한 점이 있으시면 언제든 말씀해주세요. 전문 상담원과 연결을 원하시면 "상담원 연결"이라고 말씀해주세요.';
        }
        
        this.addMessage('bot', response);
    }
    
    renderMessages() {
        const container = document.getElementById('chatMessages');
        if (!container) return '';
        
        container.innerHTML = this.messages.map(msg => `
            <div class="message ${msg.type}">
                <div class="message-avatar">
                    ${msg.type === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>'}
                </div>
                <div>
                    <div class="message-content">${msg.message}</div>
                    <div class="message-time">${msg.timestamp.toLocaleTimeString('ko-KR', {hour: '2-digit', minute: '2-digit'})}</div>
                </div>
            </div>
        `).join('');
        
        container.scrollTop = container.scrollHeight;
    }
}

// Initialize chat widget
document.addEventListener('DOMContentLoaded', () => {
    new ChatWidget();
});