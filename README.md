# Manage request commits from Github API

Mono-repo for the Manage Commits application

# Packages

- **Packages** : All the packages that are going to be deployed in NPM.
  - **[managerequest-api](packages/api/README.md)** : manage request REST API
  - **[managerequest-ui](packages/ui/README.md)** : manage request UI 
  
# Tools

- Lerna: A tool for managing monorepo. Provides dependency linking and package versioning
  - Configuration File : lerna.json

- ConventionalCommits: A specification for adding human and machine readable
  meaning to commit messages.
  - Configuration File : .releaserc.json

# Commands

- **postinstall** - Command that is executed after install (automatic).
- **clean** - Command that cleans the solution.
 
# Requirements


# Development

For developing the solution:

- Install nodejs v14.19.1
- Download / Fork the Repo.
- Install the repo : `npm i`.
- Open each of the projects independently and start the corresponding project.
