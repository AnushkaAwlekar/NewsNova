// import React, { useEffect, useState } from "react";
// import styles from "./News.module.css"; 

// function News() {
//   const [headlines, setHeadlines] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const API_URL = "http://localhost:5001/NewsPage/hindu";

//   useEffect(() => {
//     async function fetchHeadlines() {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await fetch(API_URL);
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         const data = await res.json();
//         setHeadlines(data.headlines || []);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchHeadlines();
//   }, []);

//   return (
//     <div className={styles.page}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>📰 Latest News</h1>

//         {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
//         {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}

//         <div className={styles.scrollBox}>
//           <ul className={styles.list}>
//             {headlines.map((item, index) => (
//               <li key={index} className={styles.listItem}>
//                 <a href={item.url} target="_blank" rel="noreferrer" className={styles.link}>
//                   {item.headline}
//                 </a>
//                 <br />
//                 <small className={styles.date}>{item.publishedAt}</small>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./News.module.css"; 

function News() {
  const { id } = useParams(); // 👈 get the newspaper id from URL
  console.log(id);
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nameMap = {
  "toi": "The Times of India",
  "hindu": "The Hindu",
  "ht": "Hindustan Times"
};


  const API_URL = `http://localhost:5001/NewsPage/${id}`;
  console.log(API_URL);

  useEffect(() => {
    async function fetchHeadlines() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setHeadlines(data.headlines || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchHeadlines();
  }, [id]); // 

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>📰 Latest News from "{nameMap[id] || id}"</h1>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}

        <div className={styles.scrollBox}>
          <ul className={styles.list}>
            {headlines.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <a href={item.url} target="_blank" rel="noreferrer" className={styles.link}>
                  {item.headline}
                </a>
                <br />
                <small className={styles.date}>{item.publishedAt}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;
