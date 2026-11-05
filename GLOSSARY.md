# Turborepo Glossary

Termos usados neste curso de monorepos JavaScript.

## Terms

**Monorepo**:
Um único repositório que contém várias aplicações ou pacotes relacionados.

**Workspace**:
Conjunto de pacotes descobertos pelo gerenciador de pacotes dentro do monorepo.

**Aplicação**:
Pacote implantável localizado normalmente em `apps/`.

**Pacote interno**:
Biblioteca ou ferramenta reutilizada por outros pacotes do workspace, sem publicação obrigatória em um registry.

**Grafo de pacotes**:
Estrutura que mostra quais pacotes dependem de quais outros pacotes.

**Task graph**:
Ordem de execução de scripts definidos por dependências entre tasks.

**Cache de task**:
Reutilização de logs e arquivos gerados quando as entradas relevantes têm o mesmo hash.

**Filtro**:
Seleção de pacotes ou dependências para limitar uma execução do Turborepo.
