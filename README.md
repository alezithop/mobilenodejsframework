# Mobile Node JS Framework

## Setup 
### JAVA DEVELOPMENT KIT (JDK)
###### (_v1.8 or on ubuntu I have 1.8.0_282_)

Check how to setup the environment variables depending the OS you're using [Set Environment Variables](https://www.baeldung.com/java-home-on-windows-7-8-10-mac-os-x-linux).

### ANDROID STUDIO
###### (_latest version works_)

Check how to setup the environment variables depending the OS you're using [Set Environment Variables](https://medium.com/@rafael_toledo/preparing-your-android-environment-for-development-android-tutorials-pt-1-5f76ca2b8a32).

#### APPIUM SERVER
###### (_v1.19.1_)

[Get it here](https://github.com/appium/appium-desktop/releases/tag/v1.19.1)

### NODE JS
###### (_v10.18.0_)

[Get it here](https://nodejs.org/en/blog/release/v10.18.0/)

### VISUAL STUDIO CODE
###### (_latest version works_)

[Get it here](https://code.visualstudio.com/)


#### Instructions to use the new app (Eribank) added in this repo:

You need to edit the absolute path of your repo to recognize the app, the file features/helpers/get_driver.js, you just need to replace my absolute path until we find a way to work with relative path.

## Cloning the repository

After install Node JS and clone the repository execute the following command to install all the required dependecies (packages).
```
npm i
```

#### Install extensions for VS Code

Open Visual Studio Code and install following extensions on Extensions by searching them in Market directly on Visual Studio Code or by clicking in the following links:

| Extension  | Publisher  | Marketplace Link |
| :------------: |:---------------:| :-----:|
| Beautify | HookyQR | [Get it](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) |
| Code Spell Checker | Street Side Software | [Get it](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) |
| copy-json-path | nidu | [Get it](https://marketplace.visualstudio.com/items?itemName=nidu.copy-json-path) |
| Cucumber (Gherkin) Full Support | Alexander Krechik | [Get it](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) |
| Django | Baptiste Darthenay | [Get it](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django) |
| ESLint | Dirk Baeumer | [Get it](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |
| Git History | Don Jayamanne | [Get it](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) |
| GitLens — Git supercharged | Eric Amodio | [Get it](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) |
| Jinja | wholroyd | [Get it](https://marketplace.visualstudio.com/items?itemName=wholroyd.jinja) |
| npm | egamma | [Get it](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) |
| npm Intellisense | Christian Kohler | [Get it](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) |
| TSLint (deprecated) | egamma | [Get it](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) |
| Visual Studio IntelliCode | Microsoft | [Get it](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) |
| vscode-icons | VSCode Icons Team | [Get it](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) |
| XML Tools | Josh Johnson | [Get it](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml) |


## Running a feature file to test your setup
Execute below command pointing to the directory in a terminal:

```
npm run test --spec ./features/dashboard/example.android.feature
```