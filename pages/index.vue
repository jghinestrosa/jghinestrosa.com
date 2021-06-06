<template>
  <main class="profile-container">
    <section class="profile">
      <img class="profile-pic" src="~/assets/profile-pic.jpg" alt="A picture of Jorge García Hinestrosa">
      <div class="profile-text">
        <h1 class="title">
          Jorge García Hinestrosa
        </h1>
        <h2 class="subtitle">Computer Science Engineer</h2>
        <ul>
          <li><span class="bold">Working as:</span> Software Developer</li>
          <li><span class="bold">Focused on:</span> Web</li>
          <li><span class="bold">Located at:</span> Barcelona, Spain</li>
        </ul>
        <h3 class="links-title">Links of interest:</h3>
        <ul>
          <li><a href="https://github.com/jghinestrosa" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://twitter.com/jghinestrosa" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://codepen.io/jghinestrosa/" target="_blank" rel="noopener noreferrer">CodePen</a></li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
.profile-container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.profile {
  margin: 10px;
  max-width: 800px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
}

.bold {
  font-weight: bold;
}

.profile-text {
  /* max-width: 70%; */
  max-width: 480px;
  margin-left: 40px;
}

.title {
  display: block;
  /* letter-spacing: 1px; */
}

.subtitle {
  font-weight: 300;
  /* color: #526488; */
  padding-bottom: 15px;
}

.links-title {
  margin-top: 20px;
  font-weight: 300;
}

.links {
  padding-top: 15px;
}

.links a {
  margin: 10px;
}

.profile-pic {
  /* border-radius: 100%; */
  /* max-width: 300px; */
  /* max-width: 30%; */
  max-width: 300px;
  border: 1px solid black;
  margin-bottom: 20px;
}

/* retro mode */

.retro-mode .profile-container:before {
  content: url('~assets/welcome3.gif');
  margin-bottom: 50px;
}

.retro-mode .profile-container:after {
  content: url('~assets/counter.gif');
  margin-top: 50px;
}

.retro-mode footer:before {
  content: url('~assets/netscape.gif');
  text-align: center;
}

</style>
