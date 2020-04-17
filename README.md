# Polls

### Instalação

Rode o gerenciador de pacotes de sua preferência para baixar as dependencias do projeto.
```
yarn install
```
ou
```
npm install
```

Instale as dependencias nativas para IOS com o seguinte comando:
```
cd ios; pod install; cd ..
```

Rode o seguinte comando para iniciar o App e instalar no device.

**IOS**
```
react-native run-ios
```
**Android**
```
react-native run-android
```


### Utilização

**Tela Inicial**

Na tela inicial é possível procurar por uma enquete específica, rolar o scroll e ver todas as enquetes cadastradas, selecionar uma enquete ou suas estatísticas e também cadastrar uma nova enquete apertando no botão com o simbolo de "+", assim abrirá um modal para o cadastro.

**Tela de Cadastro da Enquete**

Na tela de cadastro é possível inserir a pegunta, cadastrar ou apagar uma opçõe de respostas, e por fim pressionar cadastrar para criar uma nova enquete. É possível voltar fechando o modal no icone "X". Somente será realizado o cadastro caso tenha uma pergunta e pelo menos 2 opções.

**Tela da Enquete**

Na tela da enquete é possível ver as opções de respostas e selecionar uma delas, o botão "Responder" só vai ser liberado após a seleção de uma das opções, ele encaminhará para tela de estatísticas e é possível voltar para a tela inicial apertando em "Voltar".

**Tela da Estatística**

Na tela de estatística será possível visualizar as opções e suas respectivas quantidade de votos e qual foi sua escolha de voto, pressionando "Voltar" será encaminhado  para a tela inicial.
