<template>
  <Layout>
    <div class="flex flex-wrap">
      <div
        v-for="project in $page.projects.edges"
        :key="project.node.id"
        class="my-4 px-2 w-full sm:w-1/2 md:w-1/2 md:my-4 md:px-4 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <article
          class="project-card flex flex-col min-h-full overflow-hidden rounded shadow-lg border border-green-100"
        >
          <g-link :to="project.node.path">
            <g-image class="border-b border-gray-500" :src="'/img/'+project.node.image" />
          </g-link>
          <div class="py-2 flex justify-between">
            <div id="project-name" class="mx-4">
              <g-link :to="project.node.path">{{ project.node.name }}</g-link>
            </div>
            <div class="mx-4 text-sm">
              <a
                v-if="project.node.source"
                :href="project.node.source"
                target="_blank"
                rel="noopener noreferrer"
                class="mx-1 text-green-500"
              >
                <font-awesome-icon :icon="['far', 'file-code']" />
              </a>
              <a
                :href="project.node.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mx-1 text-green-500"
              >
                <font-awesome-icon icon="external-link-alt" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject(sortBy: "id", order: ASC) {
    edges {
      node { 
        id
        name
        image
        url
        source
        path
      }
    }
  }
}
</page-query>

<style>
.project-card {
  transition: 0.3s;
}

.project-card:hover {
  transform: scale(1.02);
}

#project-name {
  font-weight: 400;
}
</style>
