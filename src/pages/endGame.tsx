import { createSignal, For, Show } from 'solid-js';
import { useCards } from '../context';

export const EndGame = () => {
  const [{ cards }] = useCards();
  return (
    <section class="grid gap-16 p-8" >
      <For each={cards.filter(c => c.showInPosition).sort((a, b) => a.showInPosition > b.showInPosition ? 1 : -1)}>
        {(card) =>
          <div>
            <img class="absolute inset-0 z-0" src={card.id + ".jpg"} />
          </div>
        }
      </For>
    </section>
  );
};