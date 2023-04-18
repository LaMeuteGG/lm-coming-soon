<template>
  <main>
    <div class="content-wrapper">
        <div class="brand-hero-container">
        <h1 class="brand-hero">Très bientôt, nous<br><strong> hurlerons</strong>.</h1>
        <img class="brand-image" src="/images/alpha_la_meute.png" alt="alpha la meute">
      </div>
      <div class="brand-links">
        <a href="https://tiktok.com/@lameutegg" target="_blank"><img src="/images/tiktok_icon.svg" alt="La Meute TikTok"></a>
        <a href="https://youtube.com/@Grimille" target="_blank"><img src="/images/youtube_icon.svg" alt="YouTube Grimille"></a>
        <a href="https://twitter.com/LaMeuteGG" target="_blank"><img src="/images/twitter_icon.svg" alt="La Meute Twitter"></a>
        <a href="https://instagram.com/LaMeuteGG" target="_blank"><img src="/images/instagram_icon.svg" alt="Instagram TikTok"></a>
        <a id="discord" :href="JOIN_DISCORD_LINK" target="_blank"><img src="/images/discord_icon.svg" alt="La Meute Discord"></a>
      </div>
    </div>
    <div class="overlay"></div>
  </main>
</template>

<script setup lang="ts">
import { JOIN_DISCORD_LINK } from './constants';


</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-image: url('/images/background.jpg');
  background-size: cover;
  padding: 0 2rem;

  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #141414 0%, #000000 100%);
    opacity: 0.6;
  }

  .content-wrapper {
    display: flex;
    flex-flow: column nowrap;
    z-index: 3;
    transform: translate3d(0, -75px, 0);
    .brand-hero-container {
      display: flex;
      align-items: center;
      .brand-hero {
        color: white;
        font-weight: 800;
        font-size: 5rem;
        text-transform: uppercase;
        line-height: 1;
        text-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
      }

      .brand-image {
        max-width: 512px;
        margin-left: -72px;
      }
    }

    .brand-links {
      margin-top: -128px;
      display: flex;
      align-items: center;
      z-index: 3;

      a {
        display: flex;
        align-items: center;
        padding: 0.75em;

        &:hover {
          img {
            filter: drop-shadow(0 0 12px rgba(203,182,130,.25)) grayscale(50%);
          }
        }

        &#discord {
          position: relative;
          top: 2px;
        }

        img {
          width: 30px;
        }
      }
    }
  }
}

strong {
  color: #D8BC7B;
  font-size: 1.65em;
}

@media screen and (max-width: 1350px) {
  main {
    .content-wrapper {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      .brand-hero-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .brand-hero {
          font-size: 2rem;
        }

        .brand-image {
          max-width: 256px;
          margin-left: 0;
        }
      }

      .brand-links {
        margin-top: 0;

        a {
          padding: 0.5em

          img {
            width: 24px;
          }
        }
      }
    }
  }
}
</style>
