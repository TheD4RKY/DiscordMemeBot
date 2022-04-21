# DiscordImageBot
> This bot uploads random image/video or any file in directory every 10 seconds on default
## Step by step guide to run this bot on Linux (example is comming from debian)
### Step 1) Adding Nodejs to ur Linux System/Subsystem

First of all we need to install nodejs and npm
1. update all packages on your linux to prevent any conficts
```
sudo apt update
```
2. install Nodejs, NPM, cURL and NVM
```
sudo apt install curl npm
```
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
```
nvm install node
```
3. check node version to see if its installed (node 16.16 or newer is required)
```
node -v
```
### Step 2) Cloning repository
```
git clone https://github.com/TheD4RKY/DiscordMemeBot
```
### Step 3) Installing dependencies
```
cd /DiscordMemeBot
```
```
npm install
```
### Step 4) getting your bot ready for start
First thing you need is editing .env file to add your bot token in format
```
TOKEN=insertyourtokenhere
```
Second thing you need to edit is channel you want the bot to post in
In index.ts edit client.channels.cache.get('PASTE_CHANNEL_ID_HERE') with discord server channel ID

### Step 5) install typescript
```
npm install -g typescript ts-node
```
```
tsc -init
```

## To start off your bot you need to run command
```
ts-node index.ts
```
