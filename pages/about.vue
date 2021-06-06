<template>
  <main class="about">
    <h1>About me</h1>
    <div class="about-container">
      <p class="about-picture">
        <img src="~/assets/about-photo.jpg" alt="a photo of me in front of a colored striped background, looking at the camera">
      </p>
      <div class="text-container">
        <section class="bio">
          <p>
            Hello, I'm Jorge García Hinestrosa, a computer science engineer born and raised in Almería but currently based in Barcelona, Spain. I work as a tech lead of the Players team at <a href="https://rakuten.tv/" target="_blank">Rakuten TV</a>.
          </p>
          <p>The Players team is in charge of developing the playback experience from the frontend side. This means I'm used to work everyday using the <code>video</code> media element, EME/MSE from HTML5 and all the propietary video APIs from different manufacturers like Samsung, LG, Panasonic, Philips or Vestel.</p>
          <p>I always try to work on side projects since I can't really stay much time without programming. If you're interested on my work, please, take a look to my <nuxt-link to="/projects">projects</nuxt-link>.</p>
          <p>My interests have always been in computers, art and culture. This is why I mostly spend my spare time on watching films, reading books and taking photos. I also draw but not as often as I would really like to.</p>
          <p>As a 80s and 90s lover, it's easy to find me playing classic LucasArts adventure games, DOS games or SNES/NES/Game Boy cartridges.</p>
          <p>I recently started to skate again. I haven't practice for more than 15 years but <a href="/ollie.jpeg">I still can ollie</a>.</p>
          <p>In case you want to contact me, you can find me on <a href="https://twitter.com/jghinestrosa" target="_blank">@jghinestrosa</a> or you can send me an old fancy email to hello@jghinestrosa.com.</p>
        </section>
        <section class="work-experience">
          <h2>Work experience</h2>
            <ul>
              <li>Rakuten TV - Players Team Tech Lead (January 2020 - present)</li>
              <li>Rakuten TV - Frontend developer (May 2016 - December 2019)</li>
              <li>Luxunda S.L. - C++, iOS and Web Developer (November 2015 - April 2016)</li>
              <li>ViewNext - Frontend developer (September 2014 - October 2015)</li>
            </ul>
        </section>
        <section class="organizations">
          <h2>Organizations</h2>
          <ul>
            <li>BeMyEar - Co-Founder</li>
          </ul>
        </section>
        <section class="education">
          <h2>Education</h2>
          <ul>
            <li>Ingeniería Informática - University of Almería (2012-2014)</li>
            <li>Ingeniería Técnica en Informática de Sistemas - University of Almería (2009-2012)</li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>

<style>
  .about {
    /* line-height: 1.2em; */
    margin: 10px 30px;
  }

  .about h1 {
    /* margin: 20px 0px; */
    margin-bottom: 20px;
  }

  /* .about h1 { */
    /* margin-bottom: 30px; */
  /* } */

  .about .about-container {
    display: flex;
    flex-flow: row wrap;
    align-items: start;
  }

  .about p.about-picture {
    max-width: 30%;
  }

  .about p.about-picture img {
    max-width: 100%;
  }

  .about .text-container {
    max-width: 70%;
    padding: 0px 30px;
  }

  .about h2 {
    margin-bottom: 15px;
  }

  .about section {
    margin-bottom: 30px;
  }

  .about section p {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 600px) {
    .about .about-container {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }

    .about h1 {
      text-align: center;
    }

    .about p.about-picture {
      max-width: 70%;
      margin-bottom: 30px;
    }

    .about .text-container {
      max-width: 100%;
      padding: 0px;
    }
  }
</style>
