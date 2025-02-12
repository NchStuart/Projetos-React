'use client';

import { useState } from 'react';
import { questionsList } from '@/data/questionsList';
import { QuestionItem } from '@/components/QuestionItem';
import { Results } from '@/components/Results';

export default function Page() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const title = 'Quiz de Culinária';

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  const loadNextQuestion = () => {
    if(questionsList[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult && 
              <QuestionItem
              question={questionsList[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
              />
          }
          {showResult && 
            <Results questions={questionsList} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult && 
          `${currentQuestion + 1} de ${questionsList.length} pergunta${questionsList.length === 1 ? '' : 's'}`
          }
          {showResult && 
            <button onClick={handleRestartButton} className='px-3 py-2 rounded-md bg-blue-800 text-white'>Reiniciar Quiz</button>
          }
        </div>
      </div>
 
    </div>

  );
}
