import Image from "next/image";

export default function Form({questions, setQuestions, category, setCategory, difficulty, setDifficulty, type, setType, onButtonClick}) {
  return (
<div className="flex flex-col gap-1 justify-evenly w-full h-full  pt-3">
          <div className=" flex flex-col justify-center border-b-2 border-solid border-red-300 p-2">
            <span className=" font-light">Number of Questions:</span>
            <input type="number" min="1" max="50" value={questions} onChange={(e) => setQuestions(e.target.value)} className=" rounded-lg p-1 bg-red-300" />
          </div>
          <div className=" flex flex-col justify-center border-b-2 border-solid border-red-300 p-2">
            <span className=" font-light">Select Category:</span>
            <select className=" rounded-lg p-1 bg-red-300" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="any">Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals &amp; Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
              <option value="32">Entertainment: Cartoon &amp; Animations</option>
              </select>
          </div>
          <div className=" flex flex-col justify-center border-b-2 border-solid border-red-300 p-2">
            <span className=" font-light">Select Difficulity:</span>
            <select className=" rounded-lg p-1 bg-red-300" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="any">Any Difficulity</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              </select>
          </div>
          <div className=" flex flex-col justify-center border-b-2 border-solid border-red-300 p-2">
            <span className=" font-light">Select Type:</span>
            <select className=" rounded-lg p-1 bg-red-300" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="any">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
              </select>
          </div>
          <div className=" flex flex-col items-center justify-center w-full p-2">
            <button className=" bg-red-500 hover:bg-red-600 w-1/2 ease-in-out duration-200 active:scale-90 p-2 rounded-lg" onClick={onButtonClick}>Start Quiz</button>
          </div>
        </div>
  );
}
