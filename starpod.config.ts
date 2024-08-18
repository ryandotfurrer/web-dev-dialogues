import { defineStarpodConfig } from 'src/utils/config';

export default defineStarpodConfig({
  blurb:
    'A podcast fueled by curiosity and community... and coffee, of course.',
  description: `Junior web developer, Ryan Furrer, is the host of Web Dev Dialogues, leading informal conversations fueled by curiosity and community, and coffee. Featuring a different guest every episode, we'll dive into the world of web development from the perspective of a junior to veteran web developers discussing all things web development, tech, and productivity.`,
  hosts: [
    {
      name: 'Ryan Furrer',
      bio: 'Junior web developer, astro fanboy, streamer, blogger, and now podcaster?.',
      img: 'ryan.jpeg',
      github: 'https://github.com/ryandotfurrer',
      twitter: 'https://x.com/ryandotfurrer',
      website: 'https://ryanfurrer.com/'
    }
    // {
    //   name: 'Charles William Carpenter III',
    //   bio: 'Third of his name, user of gifs, hater of ESM.',
    //   img: 'chuckcarpenter.jpg',
    //   github: 'https://github.com/chuckcarpenter',
    //   twitter: 'https://twitter.com/CharlesWthe3rd'
    // }
  ],
  platforms: {
    apple:
      'https://podcasts.apple.com/us/podcast/web-dev-dialogues/id1763499025',
    overcast: 'https://overcast.fm/itunes1763499025',
    pocketCasts: 'https://pca.st/dkibdvrw',
    spotify: 'https://open.spotify.com/show/48F9MQtsyM5t7q7irfqTCj'
  },
  rssFeed: 'https://anchor.fm/s/fa04a254/podcast/rss'
});
