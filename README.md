# Oxigênio - Central de Podcast

Aplicativo mobile acadêmico desenvolvido em React Native com Expo. A proposta é reunir, em uma interface única, episódios e links externos relacionados ao projeto de extensão **Oxigênio - Central de Podcast**, da Univali.

## Contexto acadêmico

Este app foi criado como protótipo funcional para um trabalho acadêmico. Ele se baseia em materiais públicos encontrados sobre o projeto Oxigênio, sem entrevista com os responsáveis e sem confirmação da situação atual do projeto.

## Problema ou oportunidade

Durante a análise dos canais públicos, foi identificada a oportunidade de reunir os conteúdos em uma única interface, facilitando a localização do acervo e o acesso às plataformas externas.

## Como executar para avaliação

Siga estes passos para rodar o aplicativo no celular usando o Expo Go ou em um emulador Android.

### 1. Pré-requisitos

- Node.js 22.13.x ou superior, conforme a documentação do Expo SDK 57.
- npm, instalado junto com o Node.js.
- Expo Go instalado no celular, caso vá executar em aparelho físico.
- Android Studio com emulador configurado, caso vá executar no computador.

Não é necessário instalar a Expo CLI globalmente. Os comandos usam a versão local do projeto.

### 2. Baixar e abrir o projeto

Abra um terminal na pasta do projeto:

```bash
cd frontEnd_Mobile_Oxigenio
```

Se a pasta tiver outro nome no computador, entre na pasta onde estão os arquivos `package.json` e `App.js`.

### 3. Instalar as dependências

Execute apenas uma vez:

```bash
npm install
```

### 4. Iniciar o servidor do Expo

Depois da instalação, execute:

```bash
npm start
```

O comando abre o Metro Bundler do Expo no terminal e mostra um QR Code.

### 5. Abrir no celular com Expo Go

1. Deixe o computador e o celular na mesma rede Wi-Fi.
2. Abra o aplicativo Expo Go no celular.
3. Escaneie o QR Code exibido no terminal.
4. Aguarde o carregamento do aplicativo.

Caso a rede da instituição bloqueie a conexão local, rode:

```bash
npx expo start --tunnel
```

Depois escaneie o novo QR Code.

### 6. Abrir no emulador Android

1. Abra o emulador pelo Android Studio.
2. Com o emulador aberto, execute:

```bash
npm run android
```

Também é possível iniciar com `npm start` e pressionar a tecla `a` no terminal.

## Scripts disponíveis

```bash
npm start        # inicia o Expo
npm run android  # abre no emulador/dispositivo Android
npm run ios      # abre no simulador iOS, apenas em macOS
npm run web      # tenta abrir a versão web pelo Expo
```

Para limpar o cache do Expo em caso de erro de carregamento:

```bash
npx expo start -c
```

## Funcionalidades

- Tela inicial com apresentação do protótipo.
- Episódio em destaque.
- Lista de episódios com pesquisa local.
- Tela de detalhes do episódio.
- Abertura segura de links externos com `Linking`.
- Compartilhamento com `Share`.
- Mensagens de erro com `Alert`.
- Tela Sobre com metodologia e limitações.

## Tecnologias

- React Native
- Expo SDK 57
- JavaScript
- React Navigation
- Native Stack Navigator
- Dados locais em arquivos JavaScript

## Estrutura de pastas

```text
assets/
src/
  components/
    BotaoLink.js
    BotaoPrincipal.js
    CardEpisodio.js
  data/
    episodios.js
    links.js
  navigation/
    AppNavigator.js
  screens/
    DetalhesScreen.js
    EpisodiosScreen.js
    InicioScreen.js
    SobreScreen.js
  styles/
    cores.js
App.js
app.json
index.js
package.json
```

## Onde editar os episódios

Os episódios ficam em:

```text
src/data/episodios.js
```


## Onde editar os links

Os links externos ficam em:

```text
src/data/links.js
```

Spotify, Instagram e página institucional foram centralizados para facilitar a troca por links oficiais atualizados.

## Limitações

- O aplicativo não usa back-end, banco de dados nem autenticação.
- Não houve entrevista com responsáveis pelo projeto.
- A situação atual do projeto Oxigênio não foi confirmada.
- Alguns links podem precisar ser revisados e substituídos por canais oficiais atualizados.

