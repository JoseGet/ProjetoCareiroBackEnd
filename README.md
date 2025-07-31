# Backend do ProjetoCareiro 

## Instalação 
Clonando o Repositório
```
git clone git@github.com:JoseGet/ProjetoCareiroBackEnd.git
```
## Execução
### Buildando e iniciando os Containers Docker!
Para construir as imagens Docker e iniciar a aplicação localmente, existem duas opções:
1. Com o projeto já instalado, procure o arquivo "docker-compose.local.yml", clique nele com o botão direito e clique em "Compose Up"
   
2. Com o projeto já instalado, execute:
```
docker compose -f docker-compose.local.yaml up -d
```
### Acessando a aplicação
Após inicializar, a aplicação estará disponível em:
* Swagger: localhost:3000/api-docs
