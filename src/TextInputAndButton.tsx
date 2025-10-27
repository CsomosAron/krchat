import { TextInput, TextInputProps } from "./TextInput";
import "./TextInputAndButton.css"
import { IconButton } from "./IconButton";
export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    icon?: string;
    onClick?: () => void;
}
export function TextInputAndButton({ buttonContent, icon, onClick, ...textInputProps }: TextInputAndButtonProps) {
    return <div class="TextInputAndButton">
        <TextInput {...textInputProps} onEnter={onClick} />
        <IconButton icon={icon ?? ""} onClick={onClick}>
            {buttonContent}
        </IconButton>
    </div>
}