
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Input = () => {

    const [gifUrl, setGifUrl] = useState('');
    const [history,setHistory]=useState([]);
async function getGif() {
  try {
    const resp = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=sLwLsm1PJIhNMaSCEX4pbW0HVP8C94VW&rating=pg-13`);
    const data = await resp.json();
    setGifUrl(data.data.images.fixed_height.url);
  } catch (error) {
    console.error('Error fetching GIF:', error);
  }
  pastGif();
}
function pastGif() {
  if (gifUrl !== "") {
    setHistory(prevHistory => {
      let newHistory = [...prevHistory, gifUrl];
      if (newHistory.length > 10) {
        newHistory = newHistory.slice(1);
      }
      return newHistory;
    });
  }
}


useEffect(()=>{
       console.log(history);
},[history])
  return (
<div className="input">
  <div className="button-row">  <button onClick={()=>{getGif()}} className="btn">Click</button>
     <Link to={'/history'} state={history} className="li"> <button className="btn">History</button>  </Link></div>
    {gifUrl && (
<div className="cards">
<div className="card">
          <img src={gifUrl} alt="GIF" className="gif-image" />
        </div>
</div>
      )}
</div>

  )
}

export default Input