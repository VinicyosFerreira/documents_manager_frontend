## 💻 Gerenciador de Documentos (Front-end)

#### Interface moderna e responsiva estruturada com Next.js e TypeScript, focada na gestão de documentos e consumo inteligente da API.

## 🚀 Tecnologias
**Next.js (App Router)**: Framework React para viabilizar uma navegação rápida e otimizada.

**TypeScript**: Garantia de tipagem ponta a ponta, evitando erros em tempo de execução.

**Tailwind CSS e Shadcn**: Utilizado para estilização da UI em conjunto com componentes de alta qualidade do Shadcn. 

**Lucide React**: Biblioteca de ícones para colaborar com uma interface intuitiva e limpa.

**Zod e RHF**: Utilizado para validar formulários e dados da aplicação

## 📁 Estrutura do Projeto
```
app/
├── _components/   # Componentes da aplicação
├── _services/     # Centralização dos fetch de dados
├── _actions/      # Utilização de server actions para POST/PATCH
componentes/        # Componentes do Shadcn
lib/               # Configurações globais de libs        
schemas/           # Schemas do zod para validação de dados
```

## 🗺️ Explorando o código
**Componentização Escalável**: Interface dividida em componentes, facilitando a manutenção e o reuso de código.

**Consumo de API Assíncrono** : Implementação de serviços desacoplados que viabilizam a comunicação com o Back-end de forma organizada.

**UI minimalista e suave**: Uso de modais, toast, badges e componentes do ShadcnUI proporcionando interface fluída e suave.

**Validação de Formulários**: Uso de estados uncontrolled com RHF em conjunto com Zod permitindo validações de forma integrada com componentes de formulários do ShadcnUI

## 📦 Como rodar localmente
**1.Clonar o projeto** 

``git clone https://github.com/VinicyosFerreira/documents_manager_frontend ``

``cd documents_manager_frontend``

**2.Configurar o env**: Crie um arquivo `.env` e aponte a URL da API (ex:API_URL=http://localhost:3333)

**3. Instalar dependências**: 
``npm install``

**4. Rodar o projeto**:
``npm run dev``

## 🔗 Links

**OBS: Projeto estruturado em Multirepo visando a separação clara de stacks. Essa abordagem permite a escalibilidade isolada de cada camada**

**Código Fonte**: [https://github.com/VinicyosFerreira/documents_manager_frontend]

**Codigo Fonte Backend**: [https://github.com/VinicyosFerreira/documents_manager_api]
