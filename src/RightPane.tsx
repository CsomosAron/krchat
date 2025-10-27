import { useState } from "preact/hooks";
import { TextInputAndButton } from "./TextInputAndButton";
import { chatService, ConversationDto } from "./ChatService";
import "./RightPane.css"
import { MessageCard } from "./MessageCard";
import { IconButton } from "./IconButton";

type RightPaneProps = {
    conversation?: ConversationDto;
    onBack?: () => void;
};

export function RightPane({ conversation, onBack }: RightPaneProps) {
    let [message, setMessage] = useState("");
    return <div class="RightPane">
        {!!conversation && <>
            <div class="conversation-header">
                <p>{conversation.name}</p>
                {onBack && (
                    <IconButton icon="arrow_back" onClick={onBack}>
                        Back
                    </IconButton>
                )}
            </div>
            <div class="messages">
                {conversation.lastMessages.map(x =>
                    <MessageCard key={x.timeStamp} message={x}
                        own={x.senderId === chatService.inbox.user.id} />)}
            </div>
            <TextInputAndButton value={message} onChange={setMessage} buttonContent="Send"
                icon="send"
                placeholder="Write a message..." onClick={() => {
                    chatService.send({ type: "message", channelId: conversation.channelId, referenceTo: 0, contentType: 0, content: message });
                    setMessage("");
                }} />
        </>}
    </div>;
}