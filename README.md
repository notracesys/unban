# Unban Strategy - Strategic Recovery

Sistema de recuperação estratégica de contas desenvolvido pela Equipe do Gaspar.

## 🛠 Tecnologias
- Next.js (App Router)
- Tailwind CSS
- Lucide React
- Genkit (IA)

## 🚀 Como fazer Push para o GitHub
O GitHub não aceita mais a senha da conta para o terminal. Siga estes passos:

1.  **Gere um Token:** Vá em [GitHub Token Settings](https://github.com/settings/tokens).
2.  **Permissões:** Selecione `repo` (Full control of private repositories).
3.  **Use como Senha:** Ao executar `git push`, quando solicitado o password, utilize o token gerado.

Se preferir não digitar sempre, você pode configurar a URL do remote com o token:
```bash
git remote set-url origin https://SEU_TOKEN@github.com/notracesys/unban.git
```
