import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import Btn from './components/UI/Btn';
import './App.css';

function App() {
  const [pageSize, setPageSize] = useState(10)
  const [newsList, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [submitStatus, setSubmitStatus] = useState(false)

  const FETCH_DATA = async () => {
    try {
      setSubmitStatus(false)
      const response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&pageSize=${pageSize}&apiKey=63b030373c884540893728081432246c`)
      const data = await response.json()
      if (response.status === 200) {
        setData(data.articles)
        setLoading(true)
        setSubmitStatus(true)
      } else {
        setError(true)
        setErrorMsg(data.message)
        setSubmitStatus(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const loadData = () => {
    setPageSize(pageSize + 10)
  }

  useEffect(() => {
    if (pageSize !== 10) {
      FETCH_DATA()
    }
  }, [])

  useEffect(() => {
    FETCH_DATA()
  }, [pageSize])

  return (
    <div className="App pb-5 text-center">
      {loading && 
        <div>
          <NewsList newsList={newsList} />
          <Btn submitStatus={submitStatus} loadData={loadData} />
        </div>
      }
      {error && 
        <div className="alert alert-danger position-fixed fixed-bottom mb-0" role="alert">
          {errorMsg}
        </div>
      }
    </div>
  )
}

export default App;
