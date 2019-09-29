const projects = require('./projects.json')

module.exports = function(api) {
  api.loadSource(actions => {
    const contentTypeProjects = actions.addCollection('Project')

    for (const project of projects) {
      contentTypeProjects.addNode({
        id: project.id,
        name: project.name,
        description: project.description,
        url: project.url,
        source: project.source,
        tags: project.tags
      })
    }
  })
}
