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
    <footer class="bg-green-500 text-center py-2 text-white">Created by <a href="https://github.com/HZooly">@Zooly</a></footer>
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
