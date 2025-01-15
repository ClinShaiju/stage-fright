const musicInfo = new Map()

musicInfo.set('escape', {
  name: 'Escape',
  description:
    'Stage Fright’s explosive debut album delivers raw energy and rebellious anthems like “Edge of Night” and “Let me Go.” A fearless entry into the world of rock.',
  img: {
    src: '/assets/images/escape.jpg',
    alt: "'Escape' Album Cover"
  },
    songs: {
    song1: 'Edge of Night',
    song2: 'Flee the House',
    song3: 'Ascending',
    song4: 'No Destination',
    song5: 'Magic Trick',
    song6: 'Let me Go',
    song7: 'Makeup, Makeoff',
    song8: 'Get Away',
    song9: 'Fly far from Here',
    song10: 'Permanent Retreat',
  },
})

musicInfo.set('scared', {
  name: 'Scared to Death',
  description:
    'With tracks like “Ring the Alarm” and “Frozen Solid,” their sophomore album dives into themes of fear and uncertainty, blending power and emotion.',
    img: {
      src: '/assets/images/scared_to_death.jpg',
      alt: "'Scared to Death' Album Cover"
    },
    songs: {
    song1: 'Ring the Alarm',
    song2: 'Star Struck',
    song3: 'Dream of Pain',
    song4: 'To the Grave',
    song5: 'From the Ground',
    song6: 'Mrs. Dismay',
    song7: 'Trick or Trap',
    song8: 'Frozen Solid',
    song9: 'Chill Out',
    song10: 'Startled Shut',
  },
})

musicInfo.set('endorphins', {
  name: 'Endorphins',
  description:
    'Their third album, featuring “Pain Reliever” and “Dance Away the Blues,” explores resilience and growth, offering a more mature yet electrifying sound.',
    img: {
      src: '/assets/images/endorphins.jpg',
      alt: "'Endorphins' Album Cover"
    },
    songs: {
    song1: 'Alleviate',
    song2: 'Fake Happy',
    song3: 'Pain Reliever',
    song4: 'Going Thru Changes',
    song5: 'Emotions r Good',
    song6: 'Bye Mr. Shy Guy',
    song7: 'Dance Away the Blues',
    song8: 'Brain Candy',
    song9: 'Am I Okay?',
    song10: 'Eat, Sleep, Repeat',
  },
})

export { musicInfo }
