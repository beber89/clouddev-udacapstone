# About Application
- I know Yo , whwnever you upload a photo for Ne-Yo it recognizes him by presenting an alert to the user.
- [[ Screenshot for the alert ]]
- If not his photo a cool quote is alerted.
-  [[ screenshot for the quote ]]

# Composition
Course 3 app implmented using microservices arch and one part uses lambda functions

# Added Feature
## Lambda pulls out random quotes
## It takes quote request from feed backend
- show edits in `udagram-feed-api`
## Edits in frontend
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