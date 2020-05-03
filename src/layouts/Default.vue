<template>
  <div>
    <div id="app" class="flex flex-col">
      <header class="mb-8 flex justify-between items-center text-white bg-green-500 px-4 md:px-8">
        <h1 id="main-title" class="text-lg py-6 md:text-2xl">
          <g-link to="/">Built with Gridsome 💚</g-link>
        </h1>
        <div class="py-6">
          <a href="https://github.com/HZooly/built-with-gridsome">
            Sources
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
      </header>
      <main class="container mx-auto px-4 md:px-8">
        <slot />
      </main>
    </div>
    <footer class="bg-green-500 flex justify-center items-center text-white">
      <div>
        Created by
        <a href="https://twitter.com/__Zooly">
          Zooly
          <font-awesome-icon :icon="['fab', 'twitter']" />
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
