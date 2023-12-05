#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to run command', command, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/officialCaesardev/-caesar-express-ts ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm i cors@latest dotenv@latest express@latest helmet@latest && npm i --save-dev @types/cors@latest @types/express@latest nodemon@latest rimraf@latest ts-node@latest tsc-alias@latest tsconfig-paths@latest typescript@latest && npm install`;

console.log(`Creating new project ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);

const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Successfully created. Happy Developing! 🚀`);
