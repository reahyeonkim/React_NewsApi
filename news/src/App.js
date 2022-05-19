import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  //뉴스 데이터 useState 로 상태관리 하기
  const [news, setNews] = useState(null);
  const newsData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ea2b4df1017c4c8c8fe34368d1d391c6"
      );
      setNews(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
        <div>
          <div>
            <button onClick={newsData}>뉴스데이터</button>
          </div>
          <div>
            {news && <textarea rows={7} value={JSON.stringify(news, null , 2)}/>}
          </div>
        </div>
    </>
  );
}

export default App;
