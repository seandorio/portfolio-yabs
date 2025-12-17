import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Joseph Arnel G. Yabut, a 21-year-old from Allen Northern Samar. I'm a 4th year BSIT student at University of Cebu Main Campus. I love writing Tagalog rap songs, sleeping, and boxing. What would you like to know about me or chat about?", sender: 'bot' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Mock responses for Joseph Arnel G. Yabut

  // Mock responses for Elgie Ytang
  const getMockResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase()

    if (message.includes('age') || message.includes('old')) {
      return "I'm 21 years old, currently in my 4th year of BSIT at University of Cebu Main Campus. Time flies when you're passionate about what you do!"
    }
    if (message.includes('school') || message.includes('education')) {
      return "I studied Elementary at Allen Northern Samar, Highschool at Saint Francis College Allen, and now College at University of Cebu Main Campus, pursuing BSIT-4th year. Education has been such a blessing in my life!"
    }
    if (message.includes('read') || message.includes('book') || message.includes('rap') || message.includes('song') || message.includes('sleep') || message.includes('box')) {
      return "I love writing Tagalog rap songs, sleeping, and boxing! These hobbies keep me creative and relaxed. What are your hobbies?"
    }
    if (message.includes('watch') || message.includes('movie') || message.includes('show')) {
      return "I don't watch much TV, but I enjoy relaxing with my hobbies like writing rap songs or boxing. What do you like to do for fun?"
    }
    if (message.includes('cebu') || message.includes('address') || message.includes('allen') || message.includes('samar')) {
      return "I'm from Allen Northern Samar! It's a beautiful place with amazing people. The community here has shaped who I am today."
    }
    if (message.includes('bsit') || message.includes('course') || message.includes('study')) {
      return "I'm currently a 4th year BSIT student at University of Cebu Main Campus. I love technology and how it can be used to help people and spread positive change in the world."
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! It's great to meet you. I'm Elgie, how are you doing today?"
    }
    if (message.includes('birthday') || message.includes('born')) {
      return "My birthday is February 14, 2007. I was born on Valentine's Day!"
    }
    if (message.includes('relationship') || message.includes('single') || message.includes('married')) {
      return "I'm single and focusing on my studies and hobbies right now."
    }
    const defaultResponses = [
      "That's interesting! Tell me more about that.",
      "I appreciate you sharing that with me. What's been on your mind lately?",
      "That's a great question! As someone who loves reading and watching, I think...",
      "Thanks for chatting with me! I enjoy conversations like this.",
      "I love learning about different perspectives. What's your take on that?"
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = { text: inputMessage, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    // Use mock responses for Joseph Arnel G. Yabut
    const mockResponse = getMockResponse(inputMessage)
    const botMessage = { text: mockResponse, sender: 'bot' }
    setMessages(prev => [...prev, botMessage])

    setIsLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className="portfolio">
      <header className="header">
        <h1> Yabs </h1> 
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm Joseph Arnel G. Yabut, a passionate developer who loves writing Tagalog rap songs, sleeping, and boxing.</p>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm Joseph Arnel G. Yabut, a 21-year-old from Allen Northern Samar. I'm currently a 4th year BSIT student at University of Cebu Main Campus.
          I have a passion for technology and love spending my free time writing Tagalog rap songs, sleeping, and boxing.
          These hobbies help me relax and express my creativity.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Chatbot Portfolio</h3>
            <p>An interactive portfolio website with an AI-powered chatbot to chat about me and my interests.</p>
          </div>
          <div className="project-card">
            <h3>Web Development Projects</h3>
            <p>Various web applications built during my BSIT studies, showcasing modern web technologies.</p>
          </div>
          <div className="project-card">
            <h3>Personal Projects</h3>
            <p>Side projects exploring new technologies and creative ideas inspired by books and movies.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
        <p>Email: joseph.yabut@example.com</p>
        <p>Location: Allen Northern Samar</p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Joseph Arnel G. Yabut. All rights reserved.</p>
      </footer>

      {/* Floating Chat Widget */}
      <div className={`chat-widget ${isChatOpen ? 'open' : ''}`}>
        {!isChatOpen ? (
          <div className="chat-toggle" onClick={() => setIsChatOpen(true)}>
            <span>💬</span>
          </div>
        ) : (
          <div className="chat-container">
            <div className="chat-header">
              <h3>Chat with Joseph</h3>
              <button className="close-btn" onClick={() => setIsChatOpen(false)}>×</button>
            </div>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <div className="message-content">
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="message bot">
                  <div className="message-content typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()}>
                Send
              </button>
            </div>
            <div className="flowise-branding">
              Powered by <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer">Google Gemini</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
