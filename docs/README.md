# Desafio Final Programa Hiring Coders

<img src="https://cdn.discordapp.com/attachments/694236612254630012/881915118965903420/unknown.png" alt="home" width="600"/>
<img src="https://cdn.discordapp.com/attachments/694236612254630012/881915260339118180/unknown.png" alt="home" width="600"/>

## Desafio Corebiz

Projeto realizado como Desafio Final do programa de treinamento Hiring Coders #2, em Ago/2021. 

Loja criada seguindo a identidade de nosso patrocinador, a empresa Corebiz, e integrando as tecnologias VTEX IO, AWS Lambda, AWS API Gateway, React, Typescript, GraphQL, Node.js, entre outras, para a criação de uma loja funcional para a empresa que emita pedidos, capture leads, cadastre clientes e interaja com a API da VTEX para gerenciar os leads e clientes cadastrados pelo painel do Admin.


## Configurando o VTEX e rodando o projeto

### 1 -  Configuração Básica

Acesse o [guia de configuração básica](https://vtex.io/docs/getting-started/build-stores-with-store-framework/1) do VTEX IO e siga todos os passos listados.

Ao final da configuração, você deve ter o CLI VTEX (Toolbelt) instalado junto com um workspace de desenvolvimento no qual você pode trabalhar.

### 2 -  Clonando o Tema da Loja

[Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) esse repositório para seus arquivos locais para poder efetivamente começar a trabalhar nele.

Depois, acesse o diretório do repositório usando seu terminal.

### 3 -  Editando o `Manifest.json`

Uma vez no diretório do repositório, é hora de editar o arquivo `manifest.json` do Tema.

Assim que estiver no arquivo, você deve substituir os valores de `vendor` e `account`. `vendor` é o nome da conta em que você está trabalhando e `account` é qualquer nome que você queira atribuir a seu tema. Por exemplo:

```json
{
  "vendor": "storecomponents",
  "name": "my-test-theme",
}
```

###  4 -  Instalando apps necessários

Para usar o Store Framework e trabalhar no tema da sua loja, é preciso ter ambos `vtex.store-sitemap` e `vtex.store` instalados.

Execute `vtex list` e cheque se ambos esses apps já estão instalados.

Caso não estejam, execute o seguinte comando para instalá-los: `vtex install vtex.store-sitemap vtex.store -f`

###  5 -  Desinstalando o tema existente

Executando `vtex list`, você pode verificar se qualquer tema está instalado.

É comum já ter um `vtex.store-theme` instalado quando você começa o processo de desenvolvimento do front da loja.

Portanto, se você encontrá-lo na lista de apps, copie o seu nome e use-o junto do comando `vtex uninstall`. Por exemplo: 

```json
vtex uninstall vtex.store-theme
```

###  6- Execute e pré-visualize sua loja

Então chegou a hora de subir todas as mudanças que você fez em seus arquivos locais para a plataforma. Para isso, use o comando `vtex link`.

Se o processo for executado sem nenhum erro, a mensagem a seguir será exibida: `App linked successfully`. Em seguida, execute o comando `vtex browse` para abrir a janela do browser tendo sua loja linkada nele.

Isso vai te possibilitar ver as mudanças aplicadas em tempo real, através da conta e do workspace em que você está trabalhando.


# Recursos e Referências Externas

Para a criação e execução desse projeto, foram utilizadas as seguintes aplicações:
- [Tema da loja](#)
- [Integraçao API AWS (Serviços)](https://github.com/matheusmereb/hc-corebiz-27-apis)
- [Admin e GraphQL](https://github.com/willamys/wgfa7-admin-vtex-io)

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
