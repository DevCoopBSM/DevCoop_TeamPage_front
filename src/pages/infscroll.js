

//만들다가포기함

import './App.css';
import { useEffect, useRef, useState } from "react";

function App() {
  const target = useRef(null);
  const [page, setPage] = useState(1); // 페이지 번호 관리
  const [isLoading, setIsLoading] = useState(false); // 콘텐츠 로딩 여부
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const options = {
      threshold: 1.0,
    };

    const callback = (entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setIsLoading(true); 
        // 새로운 콘텐츠 불러옴
        setTimeout(() => {
          setPage(page + 1); 
          setIsLoading(false); 
        }, 1000); 
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);

    return () => {
      observer.disconnect(); 
    };
  }, [page, isLoading]);

  return (
    <>
      <div style={{ height: "300vh", backgroundColor: "green" }} />
      <div style={{ height: "100px", backgroundColor: "red" }} ref={target}>
        bottom
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
           <div>
          <ul>
            {setNumbers([1, 2, 3, 4, 5])}
            {numbers.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
          <p>New Content Page {page}</p>
        </div>
      )}
    </>
  );
}

export default App;
