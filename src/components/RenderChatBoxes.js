import styled from "styled-components";
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 16px;
`;
export default function RenderChatBoxes({ chatData }) {
  return (
    <ChatContainer>
      {chatData.map((chatNode) => (
        <div
          style={{ alignSelf: chatNode.isUser ? "flex-end" : "flex-start" }}
          key={chatNode.id}
        >
          {chatNode.userInput}
        </div>
      ))}
    </ChatContainer>
  );
}
