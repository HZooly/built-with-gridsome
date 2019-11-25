<template>
  <Layout>
    <div class="flex justify-end">
      <button class="bg-green-500 text-white mx-4 py-2 px-3 shadow-lg rounded hover:bg-green-400">
        <a href="https://github.com/HZooly/built-with-gridsome#add-a-project">Add your site</a>
      </button>
    </div>
      <ProjectsList :projects="$page.projects.edges" />
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

<script>
import ProjectsList from "@/components/ProjectsList";

export default {
  name: "Index",
  components: {
    ProjectsList
  }
};
</script>
