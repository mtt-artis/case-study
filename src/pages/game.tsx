import { createSignal, For, Show } from 'solid-js';
import { Dialog } from "@kobalte/core";
import { useCards } from '../context';

const base = import.meta.env.BASE_URL;

export const Game = () => {
  const [{ cards }] = useCards();
  return (
    <section class="flex flex-wrap gap-16 p-8" >
      <For each={cards.filter(c => c.showInPosition).sort((a, b) => a.showInPosition > b.showInPosition ? 1 : -1)}>
        {(card) => <Dialog.Root>
          <Dialog.Trigger >
            <div class="tilting-card-wrapper w-300px h-423px cursor-pointer">
              <div class="mouse-position-tracker"></div>
              <div class="mouse-position-tracker"></div>
              <div class="mouse-position-tracker"></div>
              <div class="mouse-position-tracker"></div>
              <div class="mouse-position-tracker"></div>
              <div class="mouse-position-tracker"></div>
              <div class="mouse-position-tracker"></div>
              <div class="mouse-position-tracker"></div>
              <div class="mouse-position-tracker"></div>
              <div
                class="tilting-card-body bg-#2e2e38 text-white relative rounded-lg p-2 grid place-items-center shadow-2xl bf"
              >
                <img class="z-0" src={base + "/" + card.id + ".jpg"} />
              </div>
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay class="fixed inset-0 z-50 bg-black/20" />
            <div class="fixed inset-0 z-50 grid place-items-center">
              <Dialog.Content class="relative grid gap-2 bf rounded-lg shadows p-2  max-h-100vh">
                <Card {...card} />
              </Dialog.Content>
            </div>
          </Dialog.Portal >
        </Dialog.Root >}
      </For>
    </section>
  );
};

const Card = (props: any) => {
  return (
    <>
      <img class="z-0 mx-auto max-h-90vh max-w-90vw" src={base + "/" + props.id + ".jpg"} />
      <div class="absolute top-0 -right-20 grid gap-4" >
        <Dialog.CloseButton class="btn-cercle grid place-items-center bg-indigo-300 mb-5">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </Dialog.CloseButton>
        <Show when={props.type === "white"}>
          <ValidateCard {...props} />
        </Show>
        <Show when={props.toFind}>
          <FindCard {...props} />
        </Show>
        <Show when={props.toCombine}>
          <CombineCard {...props} />
        </Show>
      </div>
    </>
  )
}

const FindCard = (props: any) => {

  const [open, setOpen] = createSignal(false);
  const [error, setError] = createSignal(false);
  const [_, { findCard }] = useCards();

  const onSubmit = (e) => {
    e.preventDefault();
    const cardId = e.target[0].valueAsNumber;
    findCard(cardId, props.toFind)
      ? setOpen(false)
      : setError(true);
  }
  return (
    <Dialog.Root isOpen={open()} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div class="btn-cercle">
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-black/20" />
        <div class="fixed inset-0 z-50 grid place-items-center">
          <Dialog.Content class="relative grid gap-8 bg-white border-2px border-solid border-indigo-200 rounded-lg shadows p-8">
            <Dialog.CloseButton class="absolute top-0 right-0 h-12 w-12 grid place-items-center">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </Dialog.CloseButton>
            <Dialog.Title class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Revèle une carte</Dialog.Title>

            <Dialog.Description >
              <form class="grid gap-4" onSubmit={onSubmit}>
                <input type="number" class="input" name="id" required />
                <input type="submit" value="OK" class="btn" />
                <Show when={error()}>
                  <p class="mt-2 text-sm mx-auto font-bold text-red-600 dark:text-red-500">raté !</p>
                </Show>
              </form>
            </Dialog.Description>

          </Dialog.Content>
        </div>
      </Dialog.Portal >
    </Dialog.Root >
  )
}

const CombineCard = (props: any) => {
  const [open, setOpen] = createSignal(false);
  const [error, setError] = createSignal(false);
  const [{ cards }, { combineCard }] = useCards();
  const associateType = () => props.type === "red" ? "indigo" : "red";
  const possibleCombineCards = () => cards.filter(c => c.showInPosition && c.type === associateType())

  const onSubmit = (e) => {
    e.preventDefault();
    const cardId = e.target[0].value;
    combineCard(cardId, props.toCombine)
      ? setOpen(false)
      : setError(true);
  }
  return (
    <Dialog.Root isOpen={open()} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div class="btn-cercle">
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-black/20" />
        <div class="fixed inset-0 z-50 grid place-items-center">
          <Dialog.Content class="relative grid gap-8 bg-white border-2px border-solid border-indigo-200 rounded-lg shadows p-8">
            <Dialog.CloseButton class="absolute top-0 right-0 h-12 w-12 grid place-items-center">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </Dialog.CloseButton>
            <Dialog.Title class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Associer la carte</Dialog.Title>

            <form class="grid gap-4" onSubmit={onSubmit}>
              <select class="input" required>
                <option></option>
                <For each={possibleCombineCards()}>
                  {(c) => <option value={c.id}>{c.id} - {c.title}</option>}
                </For>
              </select>
              <input
                class="btn"
                type="submit"
                value="Associer"
              />
              <Show when={error()}>
                <p class="mt-2 text-sm mx-auto font-bold text-red-600 dark:text-red-500">raté !</p>
              </Show>
            </form>

          </Dialog.Content>
        </div>
      </Dialog.Portal >
    </Dialog.Root >
  )
}

const ValidateCard = (props: any) => {
  const [open, setOpen] = createSignal(false);
  const [_, { setValid }] = useCards();
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    setValid(props.id, f.get("is-valid") as string, f.get("message") as string);
    setOpen(false);
  }
  return (
    <Dialog.Root isOpen={open()} onOpenChange={setOpen}>
      <Dialog.Trigger class="btn-cercle disabled:bg-gray">
        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-black/20" />
        <div class="fixed inset-0 z-50 grid place-items-center">
          <Dialog.Content class="relative grid gap-8 bg-white border-2px border-solid border-indigo-200 rounded-lg shadows p-8 min-w-500px">
            <Dialog.CloseButton class="absolute top-0 right-0 h-12 w-12 grid place-items-center">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </Dialog.CloseButton>
            <Dialog.Title class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">valide ou non ?</Dialog.Title>

            <Dialog.Description >

              <form class="grid gap-4" onSubmit={onSubmit}>
                <fieldset disabled={props.isValid}>
                  <div class="grid gap-4 grid-cols-2">
                    <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                        id="bordered-radio-1"
                        type="radio"
                        value="true"
                        name="is-valid"
                        style="appearance: auto;"
                        class="outline-none w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded-full"
                        required
                        checked={props.isValid === "true"}
                      />
                      <label
                        for="bordered-radio-1"
                        class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Document conforme
                      </label>
                    </div>
                    <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                        id="bordered-radio-2"
                        type="radio"
                        value="false"
                        name="is-valid"
                        style="appearance: auto;"
                        class="outline-none w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded-full"
                        checked={props.isValid === "false"}
                        required
                      />
                      <label
                        for="bordered-radio-2"
                        class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Document frauduleux
                      </label>
                    </div>
                  </div>

                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Justifiez</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    placeholder="Veuillez rédiger vos réflexions..."
                    disabled={props.isValid}
                    required
                  >
                    {props.message}
                  </textarea>
                </fieldset>

                <button class="btn" type="submit" disabled={props.isValid}>valider</button>
              </form>

            </Dialog.Description>

          </Dialog.Content>
        </div>
      </Dialog.Portal >
    </Dialog.Root >
  )
};
