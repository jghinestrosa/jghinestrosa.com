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
            Hello, I'm Jorge García Hinestrosa, a computer science engineer born and raised in Almería but currently based in Barcelona, Spain. I work as a tech lead of the SmartTV team at <a href="https://filmin.es/" target="_blank">Filmin</a>.
          </p>
          <p>My professional experience goes from front-end Web development to more specific SmartTV development.</p>
          <p>My main focus in the last few years has been on developing video playback experience from the front-end side for video streaming services.</p>
          <p>Due to my SmartTV development experience, I have studied and integrated propietary video APIs from different manufacturers like Samsung, LG, Panasonic, Philips or Vestel in multiple projects available in production for several countries.</p>
          <p>I always try to work on side projects since I can't really stay much time without programming. If you're interested on my work, please, take a look to my <nuxt-link to="/projects">projects</nuxt-link>.</p>
          <p>My interests have always been in computers, art and culture. This is why I mostly spend my spare time on watching films, reading books and taking photos. I also draw with charcoal and pastels, specially portraits.</p>
          <p>As a 80s and 90s lover, it's easy to find me playing classic LucasArts adventure games, DOS games or SNES/NES/Game Boy cartridges.</p>
          <p>I recently started to skate again. I haven't practice for more than 15 years but <a href="/ollie.jpeg">I still can ollie</a>.</p>
          <p>In case you want to contact me, you can find me on <a href="https://twitter.com/jghinestrosa" target="_blank">@jghinestrosa</a> or you can send me an old fancy email to hello@jghinestrosa.com.</p>
        </section>
        <section class="work-experience">
          <h2>Work experience</h2>
            <h3>Job positions</h3>
            <ul>
              <li>Filmin - SmartTV Team Tech Lead (August 2022 - present)</li>
              <li>Rakuten TV - Players Team Tech Lead (January 2020 - August 2022)</li>
              <li>Rakuten TV - Frontend developer (May 2016 - December 2019)</li>
              <li>Luxunda S.L. - C++, iOS and Web Developer (November 2015 - April 2016)</li>
              <li>ViewNext - Frontend developer (September 2014 - October 2015)</li>
            </ul>
            <h3>Technology experience</h3>
            <ul>
              <li>HTML5 + JavaScript + CSS</li>
              <li>EME / MSE</li>
              <li>React</li>
              <li>Redux</li>
              <li>Vue</li>
              <li>AngularJS</li>
              <li>CloudFlare</li>
            </ul>
            <h3>SmartTV experience</h3>
            <ul>
              <li>Samsung Tizen</li>
              <li>LG WebOS</li>
              <li>AndroidTV</li>
              <li>FireTV</li>
              <li>Hisense</li>
              <li>Panasonic</li>
              <li>Philips</li>
              <li>Vestel</li>
              <li>Sony</li>
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
    line-height: 1.5;
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

  .about h3 + ul {
    margin-bottom: 15px;
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
