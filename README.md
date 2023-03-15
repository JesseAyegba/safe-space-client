# Safe space client🫡😜

This repository represents client-side implementation of Safe space (a cloud storage platform).
It utilizes technologies like React JS, Next JS, Typescript and is expected to be deployed
to a worker node of a kubernetes cluster served from AWS.

## Live Deployment

<a href="https://safe-space-client.vercel.app" target="_blank">Live Deployment</a>

## Getting this project to work🚀🧑‍🚀

### Using docker👍👌😉

1. Clone this repo.
2. Ensure you have docker installed locally.
3. Open up your terminal and cd into the project's root directory. (ie where the docker file is)
4. Build a docker image with the following command

```
docker build -t <yourname>/safe-space-client:1.0 .
```

5. Run the application in a container using port forwarding with the following command.

```
docker run -p 3000: 3000 <yourname>/safe-space-client:1.0
```

6. The application should be running on http://localhost:3000

### Using npm😒

1. Clone this repo
2. Ensure you have npm installed locally.
3. Open up your terminal and cd into the project's root directory.
4. Install yarn globally with the following command.

```
npm install -g yarn
```

5. Install of the project's dependencies with the following command.

```
yarn
```

6. Start the application with the following command.

```
yarn dev
```

7. The application should be running on http://localhost:3000

## Sidenotes😁

1. Tests will run as part of a CI/CD pipeline.
