import styled from "styled-components";
import RenderChatBoxes from "./components/RenderChatBoxes";
import InputContainer from "./components/InputContainer";

const ChatContainer = styled.div`
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
`;

const chatData = [
  {
    isUser: false,
    userInput: "Hello, How are you today?",
    id: 1,
  },
  {
    isUser: true,
    userInput: "Hello, How are you?",
    id: 2,
  },
  {
    isUser: false,
    userInput: "Great, how can I assist you?",
    id: 3,
  },
];

function App() {
  return (
    <ChatContainer>
      <RenderChatBoxes chatData={chatData} />
      <InputContainer />
    </ChatContainer>
  );
}

export default App;
