import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import { useState } from "preact/hooks";
import { ConversationDto } from "./ChatService";
import "./Main.css"

export function Main() {
    let [selected, setSelected] = useState<ConversationDto>();
    const handleBack = () => setSelected(undefined);
    const mainClass = `Main ${selected ? "right" : "left"}`;
    return <div class={mainClass}>
        <LeftPane selected={selected} onSelect={setSelected} />
        <RightPane conversation={selected} onBack={handleBack} />
    </div>;
}