<template>
  <div class="overflow-hidden">
    <div
      class="flex flex-col bg-gray-800 w-auto h-[calc(90svh+4rem)] bg-[url('/assets/logo/home_background.jpg')] bg-center md:bg-fixed"
    >
      <div class="h-16"></div>

      <div
        class="flex flex-row items-center md:items-end w-full shrink basis-3/4 md:basis-2/3 justify-center"
      >
        <div class="flex max-w-3xl min-w-0 mx-6">
          <img
            src="/assets/logo/full_logo_transparent.png"
            class="max-w-3xl min-h-0 min-w-0"
            alt="Stage Fright Logo"
          />
        </div>
      </div>
      <div class="flex items-start md:items-center basis-1/4 md:basis-2/3 w-full justify-center">
        <div
          class="flex flex-row items-center max-w-3xl basis-[48rem] h-12 justify-between mx-6 gap-6"
        >
          <a
            href="https://www.facebook.com/people/Stage-Fright/61571393279413/"
            class="h-full max-w-12"
            aria-label="Check out our Facebook page!"
          >
            <img
              src="/assets/icons/facebook.svg"
              class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/stagefrightrockband/"
            class="h-full max-w-12"
            aria-label="Check out our Instagram page!"
          >
            <img
              src="/assets/icons/instagram.svg"
              class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.youtube.com/@stagefrightrockband"
            class="h-full max-w-12"
            aria-label="Check out our music videos on Youtube!"
          >
            <img
              src="/assets/icons/youtube.svg"
              class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
              alt="Youtube"
            />
          </a>
          <a
            href="https://open.spotify.com/user/314pmfz6ftbrlmjmgmtacdd5ntx4"
            class="h-full max-w-12"
            aria-label="Check out our music on Spotify!"
          >
            <img
              src="/assets/icons/spotify.svg"
              class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
              alt="Spotify"
            />
          </a>
          <a
            href="https://music.apple.com"
            class="h-full max-w-12"
            aria-label="Check out our music on Apple Music!"
          >
            <img
              src="/assets/icons/apple-music.svg"
              class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
              alt="Apple Music"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="bg-black w-auto px-4 md:px-8 py-12 flex flex-col justify-center items-center">
      <h1 class="font-bold text-white text-6xl font-loud w-full text-center mb-8 md:mb-16">
        The Sound of Stage Fright
      </h1>
      <div class="h-full w-dvw flex flex-col md:flex-row justify-around items-center gap-8">
        <div
          class="flex flex-col border border-neutral-700 h-auto hover:scale-105 transition-all rounded-md overflow-hidden w-fit"
        >
          <img src="/assets/images/escape.jpg" alt="'Escape' Album Cover" class="max-w-80 h-fit" />
          <p class="text-white text-center p-8 text-3xl uppercase font-loud underline">Escape</p>
        </div>
        <div
          class="flex flex-col border border-neutral-700 h-auto hover:scale-105 transition-all rounded-md overflow-hidden w-fit"
        >
          <img
            src="/assets/images/scared_to_death.jpg"
            alt="'Scared To Death' Album Cover"
            class="max-w-80 h-fit"
          />
          <p class="text-white text-center p-8 text-3xl uppercase font-loud underline">
            Scared to Death
          </p>
        </div>
        <div
          class="flex flex-col border border-neutral-700 h-auto hover:scale-105 transition-all rounded-md overflow-hidden w-fit"
        >
          <img
            src="/assets/images/endorphins.jpg"
            alt="'Endorphins' Album Cover"
            class="max-w-80 h-fit"
          />
          <p class="text-white text-center p-8 text-3xl uppercase font-loud underline">
            Endorphins
          </p>
        </div>
      </div>
      <button
        class="mt-16 text-white text-3xl border border-neutral-700 bg-black w-auto p-4 rounded-md hover:bg-neutral-900 hover:scale-105 transition-all"
      >
        <RouterLink class="font-loud" to="/music">Check out our music</RouterLink>
      </button>
    </div>
    <div class="w-auto bg-zinc-900 flex p-8 md:py-16 items-center justify-center">
      <div class="max-w-screen-2xl w-full flex flex-col md:flex-row items-center">
        <img
          src="/assets/images/team.png"
          alt="Band Group Picture"
          class="h-auto md:max-w-2xl rounded-lg flex-shrink mb-16"
        />
        <div class="md:ml-8 flex justify-center items-center w-full flex-col">
          <h1 class="font-bold text-white text-6xl font-loud text-center mb-8 w-full">
            The Team Behind the Stage
          </h1>
          <p class="text-white text-xl max-w-screen-md text-center">
            From the sweltering heat of Tampa’s suburbs to stages across the nation, Stage Fright is
            a band born out of raw energy and defiance. What started as a group of high school
            seniors jamming in a garage has evolved into a force that refuses to be ignored. With a
            unique blend of metal, rock, and everything in between, they’ve captivated fans with
            their high-octane shows and music that hits you right in the gut. Whether they’re
            cranking out anthems of rebellion or songs of introspection, Stage Fright’s journey has
            only just begun.
          </p>
          <button
            class="mt-16 text-white text-3xl border border-neutral-700 bg-black w-auto p-4 rounded-md hover:bg-neutral-950 hover:scale-105 transition-all"
          >
            <RouterLink class="font-loud" to="/about">Read more about us</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
