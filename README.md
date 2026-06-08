# Gerenciador de Tarefas (To-Do List) — React + TypeScript

Um gerenciador de tarefas elegante, responsivo e de alto desempenho projetado para auxiliar usuários na organização de suas atividades diárias. Desenvolvido sob a metodologia **Spec Driven Development (SDD)**, com foco em estabilidade, tipagem estática segura, separação de lógica e testes automatizados.

---

## 🚀 Tecnologias Utilizadas

- **Core**: React 18+ (Vite) com TypeScript para tipagem estática e segurança.
- **Estilização**: CSS3 Puro (Vanilla CSS) com design moderno em Dark Mode, variáveis de design dinâmicas, glassmorphism e micro-animações.
- **Testes Unitários**: Vitest para execução rápida de testes das regras de negócio.
- **Testes End-to-End (E2E)**: Cypress para simulação completa de interações em navegador real.
- **SDD Tooling**: OpenSpec para ciclo de vida de especificação e desenvolvimento orientado a contratos.

---

## 📁 Estrutura de Pastas do Projeto

```text
TDE4_GERENCIADOR_DE_TAREFAS/
├── .agent/                 # Workflows e habilidades do agente de IA
├── cypress/                # Estrutura do Cypress para testes E2E
│   └── e2e/
│       └── todo.cy.ts      # Suíte de testes ponta a ponta
├── openspec/               # Arquivos globais de especificação do OpenSpec
│   ├── changes/            # Histórico de alterações propostas e arquivadas
│   └── specs/              # Especificações globais consolidadas
├── src/                    # Código-fonte da aplicação React
│   ├── assets/             # Recursos de mídia e imagens estáticas
│   ├── components/         # Componentes isolados da interface
│   │   ├── TodoFilter.tsx  # Botões de alternância de filtros de status
│   │   ├── TodoForm.tsx    # Formulário de entrada com select de prioridades
│   │   ├── TodoItem.tsx    # Visualização e formulário de edição inline da tarefa
│   │   └── TodoList.tsx    # Container da lista com comportamento de lista vazia
│   ├── App.css             # Estilo limpo padrão
│   ├── App.tsx             # Componente central que gerencia o estado e LocalStorage
│   ├── index.css           # Design system (variáveis CSS, layouts e animações)
│   ├── main.tsx            # Ponto de montagem da aplicação React
│   ├── todo.test.ts        # Testes unitários com Vitest
│   ├── todoLogic.ts        # Lógica de negócio pura (add, toggle, edit, delete, filter)
│   └── types.ts            # Declaração dos tipos estáticos (Todo, Priority)
├── cypress.config.ts       # Configurações do Cypress (baseUrl e supportFile)
├── index.html              # Entrada raiz otimizada para SEO e acessibilidade
├── package.json            # Manifest de dependências e scripts de execução
├── spec-v1.md              # Especificação de Requisitos da Versão 1
├── spec-v2.md              # Especificação de Requisitos da Versão 2
├── tsconfig.json           # Configurações globais do TypeScript
└── vite.config.ts          # Configurações do compilador do Vite
```

---

## 📥 Instalação e Execução

### 1. Pré-requisitos
Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em seu sistema.

### 2. Instalar Dependências
Instale todas as dependências de produção e de desenvolvimento do projeto:
```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
Inicie a aplicação localmente:
```bash
npm run dev
```
O projeto estará disponível por padrão em: `http://localhost:5173/` (ou `http://127.0.0.1:5173/`).

---

## 🧪 Execução de Testes

### Testes Unitários (Vitest)
Para executar a suíte de testes unitários que valida as 8 regras de negócio de forma isolada:
```bash
npx vitest
```

### Testes E2E (Cypress)
Para abrir a interface gráfica interativa do Cypress para execução visual de testes ponta a ponta:
```bash
npx cypress open
```
Para executar os testes E2E diretamente pelo terminal em modo headless (com o servidor de desenvolvimento ativo):
```bash
npx cypress run
```

---

## 📝 Documentos de Especificação

- **[spec-v1.md](file:///c:/Users/Usuario/Desktop/TDE4_GERENCIADOR_DE_TAREFAS/spec-v1.md)**: Requisitos iniciais para cadastro simples, listagem e conclusão de status.
- **[spec-v2.md](file:///c:/Users/Usuario/Desktop/TDE4_GERENCIADOR_DE_TAREFAS/spec-v2.md)**: Requisitos evolutivos contendo as regras de negócio para edição inline, exclusão, filtros por status, badges de prioridades (Baixa, Média, Alta) e persistência via LocalStorage.

---

## 📸 Evidências das Etapas (Prints)

As capturas de tela que ilustram o funcionamento da aplicação e a execução dos testes estão salvas na pasta **[prints_Das_Etapas](file:///c:/Users/Usuario/Desktop/TDE4_GERENCIADOR_DE_TAREFAS/prints_Das_Etapas)**:

- **Etapa 1 (Interface básica da Versão 1)**:
  - Caminho: `prints_Das_Etapas/Etapa_01.png`
  - Link direto: **[Visualizar Etapa 1](file:///c:/Users/Usuario/Desktop/TDE4_GERENCIADOR_DE_TAREFAS/prints_Das_Etapas/Etapa_01.png)**
- **Etapa 2 (Interface avançada com filtros, prioridades, edição inline e exclusão da Versão 2)**:
  - Caminho: `prints_Das_Etapas/Etapa_02.png`
  - Link direto: **[Visualizar Etapa 2](file:///c:/Users/Usuario/Desktop/TDE4_GERENCIADOR_DE_TAREFAS/prints_Das_Etapas/Etapa_02.png)**

---

## 🧠 Reflexão: SDD e o Impacto do Desenvolvimento com IA

A transição entre a versão 1 e a versão 2 da especificação demonstrou claramente a força do **Spec Driven Development (SDD)** no ciclo de desenvolvimento de software. Ao detalhar meticulosamente os novos requisitos, as regras de negócio associadas (como a prioridade padrão "Média" e a obrigatoriedade do título) e os cenários de uso em formato estruturado na `spec-v2.md`, foi possível programar a aplicação de maneira puramente determinística. Esse nível de clareza impediu o surgimento de ambiguidades técnicas, permitindo que a arquitetura do aplicativo fosse previamente desenhada para isolar as funções de manipulação de tarefas em um módulo de lógica pura (`todoLogic.ts`). Com isso, a codificação tornou-se mais fluida e assertiva, reduzindo o tempo de depuração e garantindo que cada componente focasse estritamente em suas responsabilidades de UI.

Além disso, a especificação detalhada funcionou como um contrato direto para a criação de testes automatizados extremamente completos. As regras e cenários descritos na `spec-v2.md` serviram como blueprint para desenhar os 8 testes unitários no Vitest (cobrindo inclusive mocks seguros de LocalStorage via `globalThis`) e os 8 cenários E2E no Cypress. A instrumentação prévia do DOM usando seletores estáveis `data-testid` evitou que testes quebrassem devido a mudanças visuais de layout, elevando a robustez da validação de ponta a ponta. Como resultado, o projeto foi entregue com uma base sólida de regressão, onde qualquer modificação futura pode ser verificada instantaneamente com comandos simples.

O papel da inteligência artificial nessa evolução foi essencial como parceiro de desenvolvimento (*pair programmer*). A IA atuou desde o refinamento inicial dos arquivos OpenSpec até a geração dos componentes React e das suítes de testes, convertendo descrições abstratas em soluções estruturadas e com boas práticas (como o uso de `crypto.randomUUID()` nativo e tipagem com `import type`). A capacidade da IA de analisar erros do compilador TypeScript (como as restrições da regra `verbatimModuleSyntax`) e diagnosticar problemas de conexão no Cypress (resolvidos pela alteração de binds de IPv6 para IPv4 `127.0.0.1`) acelerou significativamente a entrega do software, garantindo um código final de alta qualidade, otimizado para SEO, limpo e livre de falhas de build.
