import { useRef } from "react";
const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const winCuponButton = (e) => {
    if (inputRef.current) {
      inputRef.current.value = "win coupon";
    }
    handleFormSubmit(e);
  }

  const timeRequired = (e) => {
    if (inputRef.current) {
      inputRef.current.value = "Time Required";
    }
    handleFormSubmit(e);
  }

  const suggestDish = (e) => {
    if (inputRef.current) {
      inputRef.current.value = "Suggest Dish";
    }
    handleFormSubmit(e);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
    // Update chat history with the user's message
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
    // Delay 600 ms before showing "Thinking..." and generating response
    setTimeout(() => {
      // Add a "Thinking..." placeholder for the bot's response
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
      // Call the function to generate the bot's response
      generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
    }, 600);
  };
  return (
    <>
      <div className="suggestion">
        <button onClick={winCuponButton} className="suggestion-items">Win Coupon</button>

        <button onClick={timeRequired} className="suggestion-items">Time Required</button>

        <button onClick={suggestDish} className="suggestion-items">Suggest Dish</button>

      </div>
      <form onSubmit={handleFormSubmit} className="chat-form">
        <input ref={inputRef} placeholder="your message here..." className="message-input" required />
        <button type="submit" id="send-message" className="material-symbols-rounded">
          ➤
        </button>
      </form>
    </>
  );
};
export default ChatForm;