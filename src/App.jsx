import './App.css';
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer,ChannelListContainer } from './components/index'
const apiKey= 'jdxztfs9vqrx'

const client=StreamChat.getInstance(apiKey)

function App() {
  return (
<div className="app__wrapper">
<Chat client={client} theme="team light">
  <ChannelListContainer/>
    <ChannelContainer/>
</Chat>
    </div>
  );
}

export default App;
