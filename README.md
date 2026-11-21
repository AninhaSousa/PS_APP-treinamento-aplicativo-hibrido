# PS App: recriação do aplicativo PlayStation

Aplicativo híbrido feito com **Expo (React Native) e TypeScript** como projeto da disciplina de Aplicativos Híbridos. É uma recriação do PlayStation App, com ofertas reais de jogos de PC vindas da API da CheapShark.

> **Autora:** _seu nome_ · **Disciplina:** _nome da disciplina_ · **Professor:** _nome_

## Como rodar

```bash
npm install
npx expo start
```

No terminal do Expo, escolha abrir no celular (Expo Go), no emulador ou na web (`w`).

## Telas (12)

| # | Tela | Descrição |
|---|---|---|
| 1 | Boas-vindas | Entrada do app, com acesso ao login e ao cadastro |
| 2 | Login | Entrada com e-mail e senha |
| 3 | Cadastro | Criação de conta com validação dos campos |
| 4 | Jogar | Jogos jogados recentemente e atalho para o perfil |
| 5 | Notícias | Notícias do PS Blog |
| 6 | PS Store | Abas de Novidades e Ofertas (dados reais da CheapShark) |
| 7 | Biblioteca | Jogos da biblioteca |
| 8 | Explorar | Busca de jogos na CheapShark |
| 9 | Favoritos | Jogos favoritados pela conta |
| 10 | Detalhe do jogo | Preço em cada loja e menor preço já registrado |
| 11 | Perfil | Dados da conta e sair |
| 12 | Configurações | Tema claro, escuro ou automático |

## Conteúdo das aulas aplicado

### Estilização com StyleSheet e Flexbox
- Estilos com `StyleSheet` e layout com Flexbox em todas as telas.
- Tema centralizado em `src/constants/theme.ts`, com modo claro e escuro (`useColorScheme`).

### Navegação com Expo Router
- Rotas por arquivo na pasta `src/app`.
- `Stack` na raiz e `Tabs` para a barra de navegação.
- Grupos de rotas `(auth)` e `(tabs)`.
- Rota dinâmica `jogo/[id]`, com `push`, `replace` e `back`.
- Telas protegidas com `Stack.Protected`: sem login, só aparecem boas-vindas, login e cadastro.

### Consumo de API (CheapShark)
- Camada `src/services/api.ts` com `fetch` e `async/await`.
- Endpoints usados: `/deals` (ofertas), `/games` (busca e detalhe) e `/stores` (lojas).
- `FlatList` com dados reais e os 4 estados da tela: carregando, erro (com botão para tentar de novo), vazio e sucesso.
- Cancelamento de requisições com `AbortController` e busca com espera de 500 ms (debounce).
- Links de ofertas pelo redirecionamento da CheapShark, como a documentação pede.

### Armazenamento local
- **SecureStore** (celular) para a conta e a sessão. Na web, que não tem SecureStore, usa o AsyncStorage.
- **AsyncStorage** para favoritos (separados por conta) e para o tema escolhido.
- Login persistente: o app reconhece a sessão ao abrir.

## Estrutura

```
src/
├── app/
│   ├── _layout.tsx          Stack raiz, providers e rotas protegidas
│   ├── index.tsx            Boas-vindas
│   ├── (auth)/              Login e cadastro
│   ├── (tabs)/              Jogar, Notícias, PS Store, Biblioteca, Explorar, Favoritos
│   ├── jogo/[id].tsx        Detalhe do jogo
│   ├── perfil.tsx
│   └── configuracoes.tsx
├── components/              DealCard e DealsList
├── context/                 Autenticação, favoritos e tema
├── hooks/                   useDeals, useGame, useGameSearch, useTheme
├── services/                api, auth, favorites, preferences, storage
└── constants/theme.ts       Cores dos temas claro e escuro
```

## Observações

- O login é **local e didático**: a conta fica no aparelho e a senha é guardada sem criptografia. Em um app real, quem confere a senha é um servidor, e ela nunca fica no celular.
- A CheapShark cobre apenas **lojas de PC**, em dólar. Por isso as ofertas não são da PlayStation Store.
- As telas Jogar, Notícias, Biblioteca e PS Store → Novidades usam dados fixos no código.