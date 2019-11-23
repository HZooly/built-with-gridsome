# Built with Gridsome

[![Netlify Status](https://api.netlify.com/api/v1/badges/de71dc2d-137d-4d12-9f21-16ef16dc3ef0/deploy-status)](https://app.netlify.com/sites/built-with-gridsome/deploys)

**Built with Gridsome** is a showcase of projects made with [Gridsome](https://gridsome.org).

## Add a project

The only and easy way to add a project to the list is to edit `projects.json` file.

Then create a Pull Request on this repository, once merged, it will rebuild the site and republish it.

### Structure

```json
{
  "id": Number,
  "name": String,
  "description": String, // optional
  "url": String,
  "source": String, // optional
  "tags": Array<String> // optional
}
```

*Note*: screenshot of provided URL will be automatically taken - tags are not displayed yet.

### How does it work?

Thanks to the [JAMstack](https://jamstack.org), every time `master` branch is modified, a build is triggered on [Netlify](https://www.netlify.com) and is redeployed on the CDN.
