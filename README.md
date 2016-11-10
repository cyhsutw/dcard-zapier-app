# Dcard Zapier App

*This is just an experimental project to connect Dcard to Zapier.*

## Introduction

[Dcard](https://www.dcard.tw/) is one of the most fast-grown website in Taiwan. This project builds a connection between Dcard and [Zapier](https://zapier.com) using the Zapier Platfrom.

You can make Zaps using this app to get new posts on the Dcard forums.

![sample-zap](http://i.imgur.com/iWUQhG6.png)

▴ example: send a new email if there's a new post on Dcard

## Hacking

1. Install `nvm`

  ```bash
  $ brew install nvm
  $ nvm install v4.3.2
  ```

2. Install `yarn` and `zapier-platform-cli`

  ```bash
  $ npm install -g yarn
  $ yarn global add zapier-platform-cli
  $ yarn install
  ```

3. Run tests

  ```bash
  $ zapier test
  ```

Once you've done these steps, make sure to login to Zapier using `zapier login` and deploy the app using `zapier push`.

## Useful Links

- Zapier: https://zapier.com
- Zapier Platform CLI: https://github.com/zapier/zapier-platform-cli
- Zapier Platform Schema: https://github.com/zapier/zapier-platform-schema

- Dcard: https://dcard.tw
