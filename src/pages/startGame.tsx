import { A } from "@solidjs/router";

export const StartGame = () => {
  return (
    <section
      class="m-auto grid gap-4 p-8 md:grid-cols-2 place-items-center max-w-100ch"
      style="grid-template-columds: 1fr 15rem"
    >
      <div class="grid gap-4 max-w-40ch text-lg" >
        <p>Aidez la direction du contrôle interne du centre CWH Paris à retracer le process d'un l'appel d'offre</p>
        <p>Pour ce faire :</p>
        <ol class="list-decimal" style="list-style:decimal">
          <li class="ml-4">Lisez attentivement chaque pièce et analysez-les. Des indices peuvent être cachés.</li>
          <li class="ml-4">Associez les cartes ayant un puzzle rouge avec celles ayant un puzzle bleu quand cela est nécessaire.</li>
        </ol>
        <p>1. 2. 3. Partez
        </p>

      </div>

      <img class="w-80 hidden md:block" src={import.meta.env.BASE_URL + "/undraw_file_searching_re_3evy.svg"} />

      <A href="game" class="btn w-fit m-auto mt-4 text-2xl col-span-full">Start</A>
    </section>

  );
};
