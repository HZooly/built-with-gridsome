<template>
  <Layout>
    <div class="flex justify-end">
      <div class="px-4">
        <span>
          There are currently
          <b>{{ $page.projects.totalCount }}</b> Gridsome websites,
          <a
            id="add-button"
            class="relative inline-block px-1 transition duration-300 ease-in text-green-600 hover:bg-text-800 font-bold tracking-wider"
            href="https://github.com/HZooly/built-with-gridsome#add-a-project"
          >add yours</a>
        </span>
      </div>
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
    totalCount
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
  @apply font-bold text-green-800;
}

.pager-link:hover:not(.active) {
  @apply text-white bg-green-400 font-bold rounded-sm;
}

#add-button:after {
  @apply bottom-0 block absolute bg-green-600;
  content: "";
  height: 2px;
  left: 50%;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

#add-button:hover:after {
  @apply w-full left-0;
}
</style>
