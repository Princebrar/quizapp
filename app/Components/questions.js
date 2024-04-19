"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
export default function Questions({setQuizstarted,listofquestions}) {
    const [currentquestion, setCurrentquestion] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [quizdone, setQuizdone] = useState(false);
    useEffect(() => {
        const correctAnswer = listofquestions[currentquestion].correct_answer;
        console.log("Correct answer is: " + correctAnswer);
        const incorrectAnswers = listofquestions[currentquestion].incorrect_answers;
        console.log("Earlier: " + incorrectAnswers);
        const randomIndex = Math.floor(Math.random() * (incorrectAnswers.length + 1));
        console.log("Random Index: " + randomIndex);
        incorrectAnswers.splice(randomIndex, 0, correctAnswer);
        setOptions([...incorrectAnswers]); // Use spread operator to create a new array
        console.log(options);
    }, [currentquestion, listofquestions]);
  return (
<div className="flex flex-col gap-1 justify-evenly w-full h-full  pt-3">
    {!quizdone ? 
    <>
<span
  className="font-semibold text-xl mt-12"
  dangerouslySetInnerHTML={{
    __html: `Q${currentquestion + 1}) ${listofquestions[currentquestion].question} ${currentquestion == 0 ? `....First one is Easy, Select the one with 2 similar options` : ``}`,
  }}
/>
    <div className="flex flex-col gap-1 items-center h-full justify-evenly ">
    {options.map((answer, index) => {
        return (
            <button key={index} className="bg-red-500 hover:bg-red-600 ease-in-out duration-200 w-full p-2 rounded-lg" onClick={() => {
                if (answer == listofquestions[currentquestion].correct_answer) {
                    if (currentquestion == listofquestions.length - 1) {
                        setQuizdone(true);
                        setScore(score + 1);
                    } else {
                        setCurrentquestion(currentquestion + 1);
                        setScore(score + 1);
                    }
                } else {
                    setQuizdone(true);
                }
            }}>{answer}</button>
        );
    })}
    </div>
    </>
    :
    <div className="flex flex-col items-center w-full justify-evenly h-full">
    <span className=" w-full text-center text-3xl font-bold">Your Scored {score}/{listofquestions.length} ({(score/listofquestions.length)*100}%)</span>
    <button className="bg-red-500 hover:bg-red-600 ease-in-out duration-200 w-1/2 p-2 rounded-lg" onClick={() => {
        setQuizstarted(false);
    }}>Start Again</button>
    </div>
}
    </div>
  );
}
