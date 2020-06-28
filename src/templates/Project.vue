<template>
  <Layout>
    <div class="text-center">
      <h1 class="text-3xl">{{$page.project.name}}</h1>
      <p class="italic mb-3">{{$page.project.description}}</p>
      <div class="flex justify-end mb-3">
        <a
          v-if="$page.project.source"
          :href="$page.project.source"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-1 bg-green-500 px-2 py-1 text-white rounded tracking-wider hover:bg-green-400 z-50"
        >Source</a>
        <a
          :href="$page.project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-1 bg-green-500 px-2 py-1 text-white rounded tracking-wider hover:bg-green-400"
        >Visit</a>
      </div>
      <g-image
        class="mb-24 shadow-lg rounded"
        :src="require('!!assets-loader!~/assets/img/' + $page.project.image)"
      />
    </div>
  </Layout>
</template>

<page-query>
query Project($id: ID!) {
  project(id: $id) {
    name
    description
    image
    source
    url
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.project.name
    }
  }
}
</script>
