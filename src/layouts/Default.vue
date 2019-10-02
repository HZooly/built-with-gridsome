<template>
  <div>
    <div id="app" class="flex flex-col">
      <header class="text-center mb-8">
        <h1 id="main-title" class="text-3xl py-6 text-white bg-green-500">
          <g-link to="/">Built with Gridsome 💚</g-link>
        </h1>
      </header>
      <main class="container mx-auto px-4 md:px-8">
        <slot />
      </main>
    </div>
    <footer class="bg-green-500 flex justify-between py-2 text-white">
      <div class="pl-4">
        Created by
        <a href="https://twitter.com/__Zooly">
          Zooly
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </div>
      <div class="pr-4">
        <a href="https://github.com/HZooly/built-with-gridsome">
          Source
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#main-title {
  font-family: "Jost";
  font-weight: 700;
}

#app {
  min-height: 95vh;
}

footer {
  min-height: 5vh;
  height: 5vh;
}
</style>
