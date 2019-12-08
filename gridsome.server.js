const cw = require("capture-website");
const crypto = require("crypto");

const projects = require("./projects.json");

module.exports = function(api) {
  api.loadSource(async actions => {
    const contentTypeProjects = actions.addCollection("Project");

    for (const [index, project] of projects.entries()) {
      const randomId = crypto.randomBytes(12).toString("hex");
      try {
        await cw.file(project.url, `./src/assets/img/${randomId}.png`, {
          scaleFactor: 1,
          timeout: 360
        });
        project.image = `${randomId}.png`;
      } catch (err) {
        console.log(`Capture website error: project ${project.name}`, err);
      }

      contentTypeProjects.addNode({
        id: index,
        name: project.name,
        image: project.image,
        description: project.description,
        url: project.url,
        source: project.source,
        tags: project.tags
      });
    }
  });
};
