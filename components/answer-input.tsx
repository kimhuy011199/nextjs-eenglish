'use client';

import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Check } from 'lucide-react';
import { AnswerContent as AnswerContentInterface } from '@/lib/interfaces';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Language } from '@/lib/enums';
import { DELAY_NEXT_QUESTION } from '@/lib/constants';

export function AnswerInput({
  answerContent,
  userAnswer,
  handleUserAnswer,
}: {
  answerContent: AnswerContentInterface;
  userAnswer: string;
  handleUserAnswer: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');

  const resetInput = () => {
    setCurrentStatus('');
    setInput('');
  };

  const handleSubmit = () => {
    handleUserAnswer(input);
    if (input === answerContent.correctAnswer) {
      setCurrentStatus('correct');
      setTimeout(() => {
        resetInput();
      }, DELAY_NEXT_QUESTION);
    } else {
      setCurrentStatus('incorrect');
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    resetInput();
  }, [answerContent]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, [currentStatus, answerContent]);

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-3'>
        <Input
          ref={inputRef}
          // placeholder='Enter your answer'
          className={twMerge(
            'h-12 !text-lg px-4',
            answerContent.language === Language.Vietnamese
              ? 'font-vietnamese'
              : '',
            currentStatus === 'correct' &&
              'border-green-500 bg-green-200 text-green-800',
            currentStatus === 'incorrect' &&
              'border-red-500 bg-red-200 text-red-800'
          )}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!!currentStatus}
          onKeyDown={handleEnter}
        />
        <Button
          className='h-12 [&_svg]:size-5'
          onClick={handleSubmit}
          disabled={!!currentStatus}
        >
          <Check size={40} strokeWidth={3} />
        </Button>
      </div>
      {currentStatus === 'incorrect' ? (
        <div>
          <Input
            disabled
            className={twMerge(
              'h-12 !text-lg px-4 border-green-500 bg-green-200 text-green-800',
              answerContent.language === Language.Vietnamese
                ? 'font-vietnamese font-semibold'
                : 'font-medium'
            )}
            defaultValue={answerContent.correctAnswer}
          />
        </div>
      ) : null}
    </div>
  );
}
