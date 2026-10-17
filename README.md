# Unban Strategy - Strategic Recovery

Sistema de recuperação estratégica de contas desenvolvido pela Equipe do Gaspar.

## 🛠 Tecnologias
- Next.js (App Router)
- Tailwind CSS
- Lucide React
- Genkit (IA)

## 🚀 Como fazer Push para o GitHub
Se o Git falhar sem pedir sua senha ou token, é porque há uma credencial antiga salva. Para corrigir, siga estes passos:

1.  **Gere um Token no GitHub:** Vá em [Settings > Developer Settings > Personal Access Tokens > Tokens (classic)](https://github.com/settings/tokens).
2.  **Permissões:** Selecione a caixa `repo` (Full control of private repositories).
3.  **Configure no Terminal:** Copie o token gerado e rode o comando abaixo no terminal do projeto:
```bash
git remote set-url origin https://COLE_SEU_TOKEN_AQUI@github.com/notracesys/unban.git
```
4.  **Faça o Push:** Agora você pode enviar suas alterações normalmente:
```bash
git push
```
