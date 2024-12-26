'use client';

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import {
  AnswerChoice as AnswerChoiceType,
  AnswerContent as AnswerContentInterface,
} from '@/lib/interfaces';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AnswerContentType } from '@/lib/enums';
import { twMerge } from 'tailwind-merge';

export function AnswerInput({
  answerContent,
  userAnswer,
  handleUserAnswer,
}: {
  answerContent: AnswerContentInterface;
  userAnswer: string;
  handleUserAnswer: (value: string) => void;
}) {
  const [input, setInput] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const handleSubmit = () => {
    handleUserAnswer(input);
    if (input === answerContent.correctAnswer) {
      setCurrentStatus('correct');
    } else {
      setCurrentStatus('incorrect');
    }
  };

  return (
    <div className='flex items-center gap-3'>
      <Input
        placeholder='Enter your answer'
        className={twMerge('h-12 !text-lg px-4')}
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <Button className='h-12 [&_svg]:size-5' onClick={handleSubmit}>
        <Check size={40} strokeWidth={3} />
      </Button>
    </div>
  );
}
