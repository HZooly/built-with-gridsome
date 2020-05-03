<template>
  <Layout>
    <div class="flex justify-end">
      <button class="bg-green-500 text-white mx-4 py-2 px-3 shadow-lg rounded hover:bg-green-400">
        <a href="https://github.com/HZooly/built-with-gridsome#add-a-project">Add your site</a>
      </button>
    </div>
    <ProjectsList :projects="$page.projects.edges" />
    <div class="flex justify-center my-4">
      <Pager :info="$page.projects.pageInfo" linkClass="pager-link" class="pager" />
    </div>
  </Layout>
</template>

<script>
import { Pager } from "gridsome";
import ProjectsList from "@/components/ProjectsList";

export default {
  name: "Index",
  components: {
    ProjectsList,
    Pager
  }
};
</script>

<page-query>
query Projects($page: Int) {
  projects: allProject(perPage: 6, page: $page, sortBy: "id", order: ASC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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

<style scoped>
.pager {
  @apply inline-block w-full text-center;
}

.pager-link {
  @apply text-center no-underline text-green-400 px-2 py-1;
}

.pager-link.active {
  @apply font-bold text-red-300;
}

.pager-link:hover:not(.active) {
  @apply text-white bg-green-400 font-bold rounded-sm;
}
</style>
