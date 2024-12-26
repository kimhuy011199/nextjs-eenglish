import React, { useState } from 'react';
import { Vocabulary } from '@/lib/interfaces';
import { FlashcardFace1 } from '@/components/flashcard-face-1';

export function useFlashcard(vocabulary: Vocabulary) {
  const tabs = [
    {
      id: 1,
      component: <FlashcardFace1 vocabulary={vocabulary} />,
    },
    {
      id: 2,
      component: <p>{vocabulary.definition}</p>,
    },
    {
      id: 3,
      component: <p>{vocabulary.id}</p>,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === selectedTab.id);
    setSelectedTab(tabs[(currentIndex + 1) % tabs.length]);
  };

  return {
    selectedTab,
    handleNextTab,
  };
}
