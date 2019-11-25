<template>
  <div class="flex flex-wrap">
    <div
      v-for="project in $page.projects.edges"
      :key="project.node.id"
      class="my-4 px-2 w-full sm:w-1/2 md:w-1/2 md:my-4 md:px-4 lg:my-4 lg:px-4 lg:w-1/3"
    >
      <ProjectCard :project="project.node"/>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "ProjectsList",
  props: {
    projects: Array
  },
  components: {
    ProjectCard
  }
};
</script>

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
