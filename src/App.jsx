import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="fullScreenIframe">
      <iframe
        title="My Embedded Content"
        src="https://crichdstreaming.xyz/embed2.php?id=skysp2&q=Sky Sports Cricket"
        width="100%"
        height="540"
        frameBorder="0"
        scrolling="no"
        allowFullScreen={true}
        marginHeight="0"
        marginWidth="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allow="fullscreen"
      ></iframe>
      <Analytics />
    </div>
  );
}

export default App;
