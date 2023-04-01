import '@unocss/reset/tailwind.css'
import 'uno.css';
import './style.css';
import { render } from 'solid-js/web';
import { Router, Routes, Route, memoryIntegration } from "@solidjs/router";

import { GameProvider } from './context';
import { Game } from './pages/game';
import { StartGame } from './pages/startGame';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => <GameProvider>
  <Router source={memoryIntegration()}>
    <header class="grid justify-center">
      <h1 class="my-8 md:my-16 text-4xl text-indigo-600 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Case study
      </h1>
    </header>
    <main class="w-full">
      <Routes>
        <Route path="/" component={StartGame} />
        <Route path="/game" component={Game} />
      </Routes>
    </main>
  </Router>
</GameProvider>, root!);
