<template>
  <div id="app" class="flex flex-col min-h-screen">
    <header class="text-center pt-8 mb-8">
      <g-link to="/">
        <h1 class="text-3xl">Built with Gridsome</h1>
      </g-link>
    </header>
    <main class="container px-4 md:px-8">
      <slot />
    </main>
  </div>
</template>
