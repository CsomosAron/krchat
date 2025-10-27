import './IconButton.less';
import { ComponentChildren } from 'preact';

type IconButtonProps = {
    readonly icon: string;
    readonly children?: ComponentChildren | string;
    readonly onClick?: (e: MouseEvent) => void;
    readonly type?: 'button' | 'submit' | 'reset';
}

export function IconButton({ icon, children, onClick, type = 'button' }: IconButtonProps) {
    return (
        <button class="IconButton" type={type} onClick={onClick}>
            <span class="material-symbols-outlined">{icon}</span>
            {children}
        </button>
    );
}
