import { A } from "@solidjs/router";

export const StartGame = () => {
  return (
    <section
      class="m-auto grid gap-4 p-8 md:grid-cols-2 place-items-center max-w-100ch"
      style="grid-template-columds: 1fr 15rem"
    >
      <div class="grid gap-4 p-8 max-w-40ch text-lg" >
        <p>
          Lors de son investigation, le service de compliance de l'entité à appris
          que le centre CWH Paris avait décidé de faire appel à un persataire
          dans le cadre d'une assistance en génie civil pour une revue des plans de coffrage.
        </p>
        <p>
          Patrick Bouffar, un collaborateur fidèle et apprécié de tous, chef de projets réseaux et prescripteur d'achat en zone parisienne s'est occupé de l'appel d'offre.
        </p>
        <p>
          Aidez la direction de contrôle interne du centre à retracer le prossecus d'appel.
        </p>
      </div>

      <img class="w-80 hidden md:block" src={import.meta.env.BASE_URL + "/undraw_file_searching_re_3evy.svg"} />

      <A href="game" class="btn w-fit m-auto mt-4 text-2xl col-span-full">Start</A>
    </section>

  );
};
