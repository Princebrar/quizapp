"use client";
import Image from "next/image";
import Background from "./Components/background";
import { useState,useEffect } from "react";
import Form from "./Components/form";
import Questions from "./Components/questions";
export default function Home() {
  const [questions, setQuestions] = useState(1);
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");
  const [fetching, setFetching] = useState(true);
  const [quizstarted, setQuizstarted] = useState(false);
  const [listofquestions, setListofquestions] = useState([]);
  const [type, setType] = useState("any");
  const onButtonClick = () => {
    async function fetchQuestions() {
        setFetching(true);
        const url1 = `https://corsproxy.io/?https://opentdb.com/api.php?amount=${questions}${category !="any" ? `&category=${category}` : ""}${difficulty !="any" ? `&difficulty=${difficulty}` : ""}${type !="any" ? `&type=${type}` : ""}`;
        const options1 = {
          method: 'GET',
        };
        
        try {
          const response = await fetch(url1, options1);
          const result = await response.json();
          setListofquestions(result.results);
          console.log("URL was: "+url1);
          console.log(result.results);
          setFetching(false);
          setQuizstarted(true);
        } catch (error) {
          setFetching(false);
          console.error(error);
        }

    }

    fetchQuestions();
  }
  return (
    <main className="flex min-h-screen text-red-100 h-screen w-screen flex-col items-center justify-center">
      <Background />
      <div className=" flex flex-col shadow-2xl items-center w-1/2 h-2/3 p-5 rounded-3xl brightness-110 bg-red-400">
        <span className=" text-3xl font-bold">Welcome To Quiz App</span>
        <span className=" text-lg font-light">Studying made Fun</span>
        {!quizstarted && 
        <Form questions={questions} setQuestions={setQuestions} setQuizstarted={setQuizstarted} category={category} setCategory={setCategory} difficulty={difficulty} setDifficulty={setDifficulty} type={type} setType={setType} onButtonClick={onButtonClick} />
        }
        {quizstarted && <Questions setQuizstarted={setQuizstarted} listofquestions={listofquestions} />}
      </div>
    </main>
  );
}
