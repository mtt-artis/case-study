import { For, Show } from 'solid-js';
import { useCards } from '../context';

const base = import.meta.env.BASE_URL;

export const EndGame = () => {
  const [{ cards, errorCount }] = useCards();
  return (
    <section class="grid gap-16 p-8" >
      <div class="my-4">{errorCount()}</div>
      <For each={cards.filter(c => c.showInPosition).sort((a, b) => a.showInPosition > b.showInPosition ? 1 : -1)}>
        {(card) =>
          <div class="grid gap-4 grid-cols-2">
            <img class="absolute inset-0 z-0" src={base + "/" + card.id + ".jpg"} />
            <div>
              <Show when={card.type === "white"}>
                <p class="text-lg">{card.isValid}</p>
                <p class="text-lg">{card.message}</p>
              </Show>
              <Show when={card.type === "blue"}>
              </Show>
              <Show when={card.type === "red"}>
              </Show>
            </div>
          </div>
        }
      </For>
    </section>
  );
};