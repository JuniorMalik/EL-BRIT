# Sistema SST - Escola Jackson 🛡️

Sistema de EAD corporativo focado em Compliance e Treinamentos de Segurança do Trabalho (SST) com emissão de certificados válidos, matriz inteligente de reciclagens e turmas presenciais.

---

## 🔐 Logins Padrão (Ambiente de Testes / Seed)

Abaixo estão as credenciais para acessar os diferentes portais do sistema e testar todas as funcionalidades. 
**A senha padrão para todas as contas é:** `123456`

| Perfil | Email | Senha | Acesso / Funcionalidades Principais |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin@jackson.com` | `123456` | Visão geral, gestão total de cursos, módulos, certificados, alunos e empresas. Gestão avançada da plataforma. |
| **Empresa Parceira** | `empresa@jackson.com` | `123456` | Radar de conformidade, matriz de treinamentos por cargo, importação de funcionários em lote (CSV) e relatórios. |
| **Instrutor Técnico** | `instrutor@jackson.com` | `123456` | Criação de Turmas Presenciais, lista de presença via QR Code (MVP) e avaliação de alunos. |
| **Aluno** | `aluno@jackson.com` | `123456` | Dashboard EAD, player de vídeos, download de materiais/apostilas, agenda presencial para matrícula e certificados. |

> **Nota:** Caso o banco de dados esteja limpo, você pode gerar esses usuários automaticamente acessando o diretório `backend` e rodando o comando:
> `npx prisma db seed`

---

## 🚀 Como Iniciar o Projeto (Docker)

A maneira mais fácil e recomendada de rodar o projeto é utilizando o Docker Compose, pois a infraestrutura foi inteiramente otimizada e sincronizada.

1.  Certifique-se de ter o [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado e rodando.
2.  Abra o terminal na pasta raiz `ERP-Escola` e rode o comando:
    ```bash
    docker-compose up --build -d
    ```
3.  O Docker irá provisionar três containers:
    *   **Postgres Database** (Porta 5432)
    *   **SST Backend - NestJS** (Porta 3001) - *Sincroniza o Prisma automaticamente no arranque.*
    *   **SST Frontend - Next.js** (Porta 3000)
4.  Acesse a plataforma em seu navegador:
    [http://localhost:3000](http://localhost:3000)

## 🏗 Arquitetura & Tecnologias
- **Frontend:** Next.js 16 (App Router), TailwindCSS, TypeScript, Lucide Icons, Zustand.
- **Backend:** NestJS 11, TypeScript, Prisma ORM, JWT Passport, Bcrypt.
- **Banco de Dados:** PostgreSQL 15.
- **DevOps:** Docker Multi-stage (Standalone Next.js) e PWA Manifest.
