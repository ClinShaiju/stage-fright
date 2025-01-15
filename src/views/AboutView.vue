<script setup>
import ModalPopup from '@/components/ModalPopup.vue'
import { aboutInfo } from '@/about'
import { ref } from 'vue'

// Reactive states for popup management
const popuped = ref(false) // Controls visibility of the popup
const popupInfo = ref('') // Heading of the popup

// Function to trigger the popup
async function popup(info) {
  popupInfo.value = info
  popuped.value = true // Show the popup
  document.body.classList.add('modal-open')
}

function closePopup() {
  document.body.classList.remove('modal-open')
  popuped.value = false
}
</script>

<template>
  <div class="flex flex-col bg-neutral-900 min-h-dvh items-center px-4 md:px-10 py-6">
    <ModalPopup :show="popuped" @close="closePopup()">
      <h1 class="font-loud text-white text-5xl text-center w-full">
        {{ aboutInfo.get(popupInfo).name }}
      </h1>
      <h2 class="text-white text-3xl text-center w-full">
        <a class="font-loud">Age:</a> <a class="text-2xl">{{ aboutInfo.get(popupInfo).age }}</a>
      </h2>
      <div class="flex flex-col-reverse md:flex-row md:mt-4 divide-solid md:divide-x divide-neutral-800 w-full">
        <div class="flex-grow flex-1 md:mt-8 align-middle p-4">
          <p class="text-white text-3xl">
            <a class="font-loud">Role: </a>
            <a class="text-xl align-middle">{{ aboutInfo.get(popupInfo).role }}</a>
          </p>
          <p class="text-white text-3xl">
            <a class="font-loud">Hometown: </a>
            <a class="text-xl">{{ aboutInfo.get(popupInfo).hometown }}</a>
          </p>
          <div class="flex flex-col text-white">
            <a class="font-loud text-3xl">Favorites: </a>
            <div class="ml-10">
              <p class="text-white text-3xl">
                <a class="font-loud">Food: </a>
                <a class="text-xl">{{ aboutInfo.get(popupInfo).faves.food }}</a>
              </p>
              <p class="text-white text-3xl">
                <a class="font-loud">Activity: </a>
                <a class="text-xl">{{ aboutInfo.get(popupInfo).faves.activity }}</a>
              </p>
              <p class="text-white text-3xl">
                <a class="font-loud">Album: </a>
                <a class="text-xl">{{ aboutInfo.get(popupInfo).faves.album }}</a>
              </p>
              <p class="text-white text-3xl">
                <a class="font-loud">Odd Hobby: </a>
                <a class="text-xl">{{ aboutInfo.get(popupInfo).faves.oddHobby }}</a>
              </p>
            </div>
          </div>
          <div>
            <h2 class="text-white text-3xl text-center w-full font-loud mt-8 mb-2">Quote</h2>
            <p class="text-white text-lg text-center italic">
              "{{ aboutInfo.get(popupInfo).quote }}"
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center flex-grow flex-1 p-8">
          <h2 class="text-white text-4xl text-center w-full font-loud">Bio</h2>
          <p class="text-white text-lg text-center">
            {{ aboutInfo.get(popupInfo).bio }}
          </p>
        </div>
      </div>
    </ModalPopup>
    <div class="flex flex-col min-h-dvh items-center max-w-7xl">
      <div class="h-[80px]"></div>
      <h1 class="flex text-white font-thedark text-6xl mt-3 text-center mb-4">
        About Stage Fright
      </h1>
      <p class="flex text-white text-center p-3 text-lg">
        Stage Fright is made of four members (Paul Carter, Gene Martin, Ace Kinley, and Peter
        Winters). The boys formed the band during their freshman year of high school, and they first
        started making music in Ace’s garage. After many months of practice, the band booked their
        first gig at the end of their senior year at their favorite local restaurant (Don’s
        Barbeque: Tampa, FL) and have been performing ever since.
      </p>
      <h1
        class="flex text-white font-thedark items-center justify-center text-center text-5xl mt-3"
      >
        Meet the crew
      </h1>

      <div class="flex items-center justify-center w-full max-w-screen-2xl">
        <div
          class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-rows-2 sm:grid-cols-1 items-center justify-center text-center w-fit p-8"
        >
          <div
            class="bg-[url(/assets/images/clin_background.jpeg)] bg-opacity-80 rounded-lg p-6 justify-center items-center text-center max-w-[375px] max-h-[563px] aspect-[2/3]"
          >
            <img
              src="/assets/images/clin_edited.png"
              alt="Photo of Paul Carter"
              class="w-52 items-center mb-3 rounded-lg mx-auto"
            />
            <h2 class="text-white font-grunge text-3xl p-1">Paul Carter</h2>
            <p class="text-white font-bold font-underline font-i mb-2">The Voice of Thunder</p>
            <p class="text-white mb-3">
              His voice isn’t just heard—it’s felt, commanding every stage like a storm rolling in.
            </p>
            <button
              class="transition-all hover:scale-[1.1] px-12 py-1 text-lg text-white font-semibold rounded-full border border-white hover:text-white hover:bg-neutral-900 hover:border-transparent max-w-full"
              @click="popup('paul')"
            >
              Read more
            </button>
          </div>

          <div
            class="relative bg-[url(/assets/images/drew_background.jpg)] rounded-lg justify-items-center p-6 items-center justify-center text-center max-w-[375px] max-h-[563px] aspect-[2/3]"
          >
            <img
              src="/assets/images/drew_edited.png"
              alt="Photo of Gene Martin"
              class="w-52 items-center mb-3 rounded-lg mx-auto"
            />

            <h2 class="text-white font-grunge text-3xl p-1">Gene Martin</h2>
            <p class="text-white font-bold font-underline font-i mb-2">The Pulse</p>
            <p class="text-white mb-3">
              Her basslines are the heartbeat of the band, steady and relentless like the hum of
              danger.
            </p>
            <button
              class="transition-all hover:scale-[1.1] px-12 py-1 text-lg text-white font-semibold rounded-full border border-white hover:text-white hover:bg-red-700 hover:border-transparent max-w-full"
              @click="popup('gene')"
            >
              Read more
            </button>
          </div>

          <div
            class="bg-[url(/assets/images/FINAL.png)] bg-opacity-80 rounded-lg justify-items-center p-6 items-center justify-center text-center max-w-[375px] max-h-[563px] aspect-[2/3]"
          >
            <img
              src="/assets/images/vic_edited.png"
              alt="Photo of Ace Kinley"
              class="w-52 items-center mb-3 rounded-lg mx-auto"
            />
            <h2 class="text-white font-grunge text-3xl p-1">Ace Kinley</h2>
            <p class="text-white font-bold font-underline font-i mb-2">The String Slayer</p>
            <p class="text-white mb-3">
              With riffs sharp enough to cut through steel, Ace’s guitar solos are pure,
              unrestrained chaos.
            </p>
            <button
              class="transition-all hover:scale-[1.1] px-12 py-1 text-lg text-white font-semibold rounded-full border border-white hover:text-white hover:bg-black hover:border-slate-800 max-w-full"
              @click="popup('ace')"
            >
              Read more
            </button>
          </div>

          <div
            class="bg-[url(/assets/images/josh_background.jpg)] bg-opacity-80 rounded-lg justify-items-center p-6 items-center justify-center text-center max-w-[375px] max-h-[563px] aspect-[2/3]"
          >
            <img
              src="/assets/images/josh_edited.png"
              alt="Photo of Peter Winters"
              class="w-52 items-center mb-3 rounded-lg mx-auto"
            />
            <h2 class="text-white font-grunge text-3xl p-1">Peter Winters</h2>
            <p class="text-white font-bold font-underline font-i mb-2">The Wrecking Beat</p>
            <p class="text-white mb-3">
              A drummer with the force of a freight train—Peter’s beats don’t just keep time, they
              destroy it.
            </p>
            <button
              class="transition-all hover:scale-[1.1] px-12 py-1 text-lg text-white font-semibold rounded-full border border-white hover:text-white hover:bg-black hover:border-transparent max-w-full"
              @click="popup('peter')"
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <h1
          class="flex text-white font-thedark items-center justify-center text-center text-6xl mb-8"
        >
          The Anthem of Four Lives
        </h1>
        <div
          class="flex flex-col max-w-screen-2xl p-3 ml-3 text-center mb-8 text-white text-lg gap-6"
        >
          <p>
            In the sweat-drenched suburbs of Tampa, Florida, four misfits collided at the crossroads
            of boredom and raw ambition. Paul Carter, a choir kid with a heart-shattering voice, met
            Gene Martin, a would-be med student dreaming of basslines instead of biology. Across
            town, Ace Kinley, a fiery Pittsburgh transplant, was teaching himself guitar at
            breakneck speed, while Peter Winters, a quiet Texan with a love for deafening drums and
            death metal, perfected his chaotic beats in a vibrating room of noise.
          </p>
          <p>
            Fate—or dumb luck—brought them together. An overheard melody, a heated argument about
            metal drummers, and a spontaneous jam session in Ace’s motor-oil-scented garage ignited
            something electric. That first gathering was pure, unfiltered chaos—a firestorm of sound
            that felt like magic. By sophomore year, their debut gig at Don’s Barbeque left a
            stunned crowd reeling from their raw, unapologetic energy.
          </p>
          <p>
            With every late-night jam and every broken string, Stage Fright was forged—not just as a
            band, but as a force. They poured their angst, dreams, and defiance into music that
            punches you in the gut and pulls you back for more. Now, after miles of touring and
            building a cult following, Stage Fright is here to prove that fear isn’t something to
            run from—it’s something to rock through.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
