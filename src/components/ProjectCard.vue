<template>
  <article
    class="project-card flex flex-col min-h-full overflow-hidden rounded shadow-lg border border-green-100"
  >
    <g-link :to="project.path">
      <!-- https://github.com/gridsome/gridsome/issues/292 -->
      <g-image
        class="border-b border-gray-500"
        :src="require('!!assets-loader!~/assets/img/' + project.image)"
      />
    </g-link>
    <div class="py-2 flex justify-between">
      <div id="project-name" class="mx-4">
        <g-link :to="project.path">{{ project.name }}</g-link>
      </div>
      <div class="mx-2 flex">
        <a
          v-if="project.source"
          :href="project.source"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-2 text-green-500 hover:text-green-400"
        >
          <font-awesome-icon :icon="['far', 'file-code']" />
        </a>
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-2 text-green-500 hover:text-green-400"
        >
          <font-awesome-icon icon="external-link-alt" />
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object
  }
};
</script>
