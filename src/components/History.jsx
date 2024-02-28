import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const History = () => {
    const [data, setData] = useState([]);
    const { state } = useLocation();

    useEffect(() => {
      if (state) {
          setData(prevData => [...prevData, ...state]);
      }
  }, [state]);
  

    return (
        <div className="history">History
            <Link to={'/'} className="li">
                <button className="btn">Back</button>
            </Link>
            <div className="cards">
                {
                    data && data.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};


export default History;