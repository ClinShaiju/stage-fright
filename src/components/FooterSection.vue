<script setup>
</script>
<template>
  <footer class="bg-black w-auto h-auto flex justify-center border-t-4 border-neutral-950">
    <div class="bg-black w-full h-auto flex flex-col md:flex-row-reverse items-center py-8 md:px-16 px-8 max-w-screen-xl">
      <div class="flex flex-col items-center">
        <p class="text-white">
          Contact:
          <a href="mailto:support@stagefrightrock.com" class="underline"
            >support@stagefrightrock.com</a
          >
        </p>
        <p class="text-white mt-4">Copyright © 2025 Stage Fright</p>
        <div class="my-4">
          <ul
            class="divide-solid divide-x font-medium flex flex-row rtl:space-x-reverse md:mt-0 md:border-0 bg-black"
          >
            <li>
              <RouterLink
                to="/attributions"
                class="block px-3 text-white underline"
                aria-current="attributions"
                >Attributions</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/accessibility"
                class="block px-3 text-white underline"
                aria-current="accessibility"
                >Accessibility</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/team" class="block px-3 text-white underline" aria-current="team"
                >Team</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="hidden md:block h-full flex-grow"></div>
      <div class="flex flex-col items-center">
        <a>
          <img src="/src/assets/logo/bpa.png" alt="BPA Logo" class="w-72" />
        </a>

        <div class="mt-4">
          <div
            class="flex items-start md:items-center basis-1/4 md:basis-2/3 w-full justify-center"
          >
            <div
              class="flex flex-row items-center max-w-3xl basis-[48rem] h-12 justify-between gap-6"
            >
              <a
                href="https://www.facebook.com/people/Stage-Fright/61571393279413/"
                class="h-full max-w-6"
                aria-label="Check out our Facebook page!"
              >
                <img
                  src="/src/assets/icons/facebook.svg"
                  class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/stagefrightrockband/"
                class="h-full max-w-6"
                aria-label="Check out our Instagram page!"
              >
                <img
                  src="/src/assets/icons/instagram.svg"
                  class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/@stagefrightrockband"
                class="h-full max-w-6"
                aria-label="Check out our music videos on Youtube!"
              >
                <img
                  src="/src/assets/icons/youtube.svg"
                  class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
                  alt="Youtube"
                />
              </a>
              <a
                href="https://open.spotify.com/user/314pmfz6ftbrlmjmgmtacdd5ntx4"
                class="h-full max-w-6"
                aria-label="Check out our music on Spotify!"
              >
                <img
                  src="/src/assets/icons/spotify.svg"
                  class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
                  alt="Spotify"
                />
              </a>
              <a
                href="https://music.apple.com"
                class="h-full max-w-6"
                aria-label="Check out our music on Apple Music!"
              >
                <img
                  src="/src/assets/icons/apple-music.svg"
                  class="h-full w-full brightness-0 invert hover:invert-0 hover:brightness-100 hover:scale-125 transition-all"
                  alt="Apple Music"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
