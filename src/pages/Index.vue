<template>
  <Layout>
    <p>Here's a list of projects using Gridsome as Static Site Generator.</p>
    <div v-for="project in $page.projects.edges" :key="project.node.id">
      <a
        :href="project.node.url"
        target="”_blank”"
        rel="noopener noreferrer"
      >{{ project.node.name }}</a>
    </div>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject {
    edges {
      node { 
        id
        name
        url
        source
        tags
      }
    }
  }
}
</page-query>
