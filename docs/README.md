# Desafio Final Programa Hiring Coders
## Desafio Corebiz


The minimum Boilerplate Theme is basic store front model based on the VTEX IO Store Framework.

It should be used only when you want to start a new store theme without any pre-set configurations, as is the case with [Store Theme](https://github.com/vtex-apps/store-theme). 

While Store Theme gives developers a ready-to-go default store front structure, the Minimum Boilerplate Theme will enable you to build you store freely from scratch.

## Configuration

### Step 1 -  Basic setup

Access the VTEX IO [basic setup guide](https://vtex.io/docs/getting-started/build-stores-with-store-framework/1) and follow all the given steps. 

By the end of the setup, you should have the VTEX command line interface (Toolbelt) installed along with a developer workspace you can work in.

### Step 2 - Cloning the Minimum Boilerplate Theme repository

[Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository to your local files to be able to effectively start working on it.

Then, access the repository's directory using your terminal. 

### Step 3 - Editing the `Manifest.json`

Once in the repository directory, it is time to edit the Minimum Boilerplate `manifest.json` file. 

Once you are in the file, you must replace the `vendor` and `account` values. `vendor` is the account name you are working on and `account` is anything you want to name your theme. For example:

```json
{
  "vendor": "storecomponents",
  "name": "my-test-theme",
}
```

### Step 4 -  Installing required apps

In order to use Store Framework and work on your store theme, it is needed to have both `vtex.store-sitemap` and `vtex.store` installed.

Run  `vtex list`  and check whether those apps are already installed. 

If they aren't, run the following command to install them: `vtex install vtex.store-sitemap vtex.store -f`

### Step 5 -  Uninstalling any existing theme

By running `vtex list`,  you can verify if any theme is installed.

It is common to already have a `vtex.store-theme`  installed when you start the store's front development process. 

Therefore, if you find it in the app's list, copy its name and use it together with the command `vtex uninstall`. For example:

```json
vtex uninstall vtex.store-theme
```

### Step 6- Run and preview your store

Then time has come to upload all the changes you made in your local files to the platform. For that, use the `vtex link` command. 

If the process runs without any errors, the following message will be displayed: `App linked successfully`. Then, run the `vtex browse` command to open a browser window having your linked store in it.

This will enable you to see the applied changes in real time, through the account and workspace in which you are working.

# Colaboradores ✨
<table>
  <tr>
    <td align="center"><a href="https://github.com/brunotda"><img src="https://avatars0.githubusercontent.com/u/15007670?v=4" width="100px;" alt=""/><br /><sub><b>Bruno Araujo</b></sub></a></td>
    <td align="center"><a href="https://github.com/brendoll"><img src="https://avatars0.githubusercontent.com/u/5557733?v=4" width="100px;" alt=""/><br /><sub><b>Hyago Brendoll</b></sub></a></td>
    <td align="center"><a href="https://github.com/marim77"><img src="https://avatars0.githubusercontent.com/u/87247438?v=4" width="100px;" alt=""/><br /><sub><b>Mari Marques</b></sub></a></td>
    <td align="center"><a href="https://github.com/matheusmereb"><img src="https://avatars0.githubusercontent.com/u/79163839?v=4" width="100px;" alt=""/><br /><sub><b>Matheus Mereb</b></sub></a></td>
    <td align="center"><a href="https://github.com/melissareboucas"><img src="https://avatars0.githubusercontent.com/u/86539553?v=4" width="100px;" alt=""/><br /><sub><b>Melissa Viana</b></sub></a></td>
     <td align="center"><a href="https://github.com/sergiofdf"><img src="https://avatars0.githubusercontent.com/u/84455399?v=4" width="100px;" alt=""/><br /><sub><b>Sérgio Filho</b></sub></a></td>
    <td align="center"><a href="https://github.com/kyothiago"><img src="https://avatars0.githubusercontent.com/u/20112201?v=4" width="100px;" alt=""/><br /><sub><b>Thiago Almeida</b></sub></a></td>
    <td align="center"><a href="https://github.com/vanzacher"><img src="https://avatars0.githubusercontent.com/u/60407938?v=4" width="100px;" alt=""/><br /><sub><b>Vanderlei Zacher</b></sub></a></td>
    <td align="center"><a href="https://github.com/VanessaOrmonde"><img src="https://avatars0.githubusercontent.com/u/74844964?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa Ormonde</b></sub></a></td>
    <td align="center"><a href="https://github.com/willamys"><img src="https://avatars0.githubusercontent.com/u/1679148?v=4" width="100px;" alt=""/><br /><sub><b>Willamys Araújo</b></sub></a></td>
  </tr>
</table>