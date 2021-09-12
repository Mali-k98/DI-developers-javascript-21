import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.jsx';
import './App.css';

const App=()=> {
  return (
    <ChatEngine
      height="100vh"
      projectID="1a8b474b-fb09-49ae-bb57-78b4352e2195"
      userName="Mali98"
      userSecret="8991"
      renderChatFeed={(chatProps)=><ChatFeed {...chatProps}/>}
    />
  );
}

export default App;
