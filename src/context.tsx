import { Accessor, createContext, createSignal, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { cards as game } from './game';

type Card = {
  id: number;
  title: string;
  type: string;
  showInPosition: number;
  toFind?: number[];
  toAddWith?: Record<number, number>;
  message?: string;
  isValid?: string;
  isMaskWhen?: number[];
};

const GameContext = createContext<[
  {
    cards: Card[];
    errorCount: Accessor<number>;
    endGame: Accessor<boolean>;
  },
  {
    findCard: (cardId: number, inCardsId: number[]) => boolean;
    combineCard: (cardId: number, inCardsId: Record<number, number>) => boolean;
    setValid: (cardId: number, isValid: string, message: string) => void;
    setEndGame: () => void;
  }
]>();

export function GameProvider(props) {
  const [cards, setCards] = createStore<Card[]>(game);
  const [errorCount, setErrorCount] = createSignal(0);
  const [showEndGame, setShowEndGame] = createSignal(true);

  const endGame = () => cards.every(c => c.showInPosition) && showEndGame();

  let showInPosition = 3;

  const findCard = (cardId: number, inCardsId: number[]) => {
    if (!inCardsId.includes(cardId)) {
      setErrorCount(i => ++i);
      return false;
    };
    setCards(
      card => card.id === cardId,
      produce(card => card.showInPosition = showInPosition++)
    )
    return true;
  };

  const combineCard = (cardId: number, inCardsId: Record<number, number>) => {
    const nextCard = inCardsId[cardId];
    if (!nextCard) {
      setErrorCount(i => ++i);
      return false;
    };
    setCards(
      card => card.id === nextCard,
      produce(card => card.showInPosition = showInPosition++)
    )
    return true;
  };

  const setValid = (cardId: number, isValid: string, message: string) => {
    setCards(
      card => card.id === cardId,
      produce(card => {
        card.isValid = isValid;
        card.message = message;
      })
    )
  }

  const setEndGame = () => setShowEndGame(false)
  return (
    <GameContext.Provider value={[{ cards, errorCount, endGame }, { findCard, combineCard, setValid, setEndGame }]} >
      {props.children}
    </ GameContext.Provider>
  );
}

export function useCards() { return useContext(GameContext); }