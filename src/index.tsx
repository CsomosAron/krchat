import { render } from 'preact';
import './index.css';
import { Login } from './Login';
import { Main } from './Main';
import { useState, useEffect } from 'preact/hooks';
import { chatService } from './ChatService';
import "./Pwa";

let theme = localStorage["theme"];
if (theme) {
    document.documentElement.classList.add(`theme-${theme}`);
} else {
    document.documentElement.classList.remove("theme-light");
}

function App() {
    let [ renderCount, setRenderCount ] = useState( 1 );
    console.log( "App render count: " + renderCount );
    useEffect(() => {
        const listener = () => setRenderCount( x => x + 1 );;
        chatService.addListener(listener);
        return () => chatService.removeListener(listener);
    }, []);
    return chatService.inbox ? <Main /> : <Login />
}
render(<App />, document.getElementById('app'));