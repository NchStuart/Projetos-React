import { Question } from '@/types/Question';
import { useState } from 'react';

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const checkQuestion = (key: number) => {
    console.log(key)
    if (selectedAnswer === null && !loading) {
      setSelectedAnswer(key);
      setLoading(true);
      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <div className='text-3xl font-bold mb-5'>{count}. {question.question}</div>
      <div>
        {loading ? (
          <div className="text-center text-lg font-semibold m-20">Carregando resposta...</div>
        ) : (
          question.options.map((item, key) => (
            <div 
              key={key} 
              onClick={() => checkQuestion(key)} 
              className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300
                ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                ${selectedAnswer !== null && selectedAnswer === key ? 'bg-blue-300 transition-all' : ''}`}
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
};