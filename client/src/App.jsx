import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import {
  ChannelContainer,
  ChannelListContainer,
  Auth,
} from "./components/index";
const cookies = new Cookies();
const authToken = cookies.get("token");
const apiKey = "jdxztfs9vqrx";

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser({
    id: cookies.get("userId"),
    name: cookies.get("userName"),
    fullName: cookies.get("fullName"),
    image: cookies.get("avatarURL"),
    phoneNumber: cookies.get("phoneNumber"),
    hashedPassword: cookies.get("hashedPassword"),
  },authToken);
}

function App() {
  if (!authToken) return <Auth/>;
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
