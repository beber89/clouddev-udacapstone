# About Application
- Chaosgram, allows users to share photos and allows developers to mess up users' captions.
- [[ Screenshot for the captions ]]
- It also presents a quote for the user whenever s/he uploads a new post.
-  [[ screenshot for the quote ]]

# Composition
Course 3 app implmented using microservices arch and one part uses lambda functions
- The project comprises four microservices
- 

# Added Feature
## Chaotic Caption Changes
- Container `backend-chaos` changes a random post's caption each 30 seconds.
## Random Quote Alert
- A lambda function is implemented with the role to send a quote to user whenever a post is uploaded
### It takes quote request from feed backend
- show edits in `udagram-feed-api`
### Edits in frontend
- Backend sends the quote to frontend which presents it as an alert to user 
 - after the user successfully creates a post


# Credentials

- Credentials posted through volume
- [[ screenshot from feed-deployment.yml annotated on volume ]]

# Testing
- Installed extra dev dependencies `@types/chai` & `@types/chai-http` in order to write tests in typescript.
- Added the run test script in `package.json` 
```
"test": "mocha -r ts-node/register src/**/*.spec.ts"
```
- Refactored `server.ts` to make it suited for testing as it needs to be imported by the test file.
- Created an RDS for testing with predetermined records to make testing easier.
- In travis-ci, Environment Variables for test added in the repository settings.
- Test shell Script `git_test.sh` is run in travis-ci VM.
- If testing fails the pipline is interrupted and new containers are not pushed onto the registry.