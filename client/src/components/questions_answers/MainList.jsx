import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QAListEntry from './QAListEntry.jsx';
import SearchBar from './SearchBar.jsx';
import styles from './qa.module.css';

const QAList = ({productId}) => {

  const [questionsData, setQuestionData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [questionsCount, setQuestionsCount] = useState(4);

  useEffect(() => {
    if (productId) {
      axios.get('/api/questions', { params: { product_id: `${productId}`, count: `${questionsCount}`} }) //go to axios github docs -> section Request Config
        .then((data) => {
          console.log('number of questions displayed: ', questionsCount);
          setQuestionData(data.data.results);
          //TODO: refactor
          setSearchResults(data.data.results);
        })
        .catch((err) => console.log(err));
    }

  }, [productId, questionsCount]);

  const handleClick = () => {
    setQuestionsCount(prev => prev + 2);
  }


  return (
    <div className={styles.wrapper}>
      <div>
        <><SearchBar data={questionsData} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResults={searchResults} setSearchResults={setSearchResults}/></>
      </div>
      <div>
        <ul>{
          searchResults.map((item) => (
            <><QAListEntry item={item} /></>
          ))
        }
        </ul>
      </div>
      <div>
        <button onClick={handleClick}>More answered questions +</button>
      </div>
    </div>

  );
};

export default QAList;