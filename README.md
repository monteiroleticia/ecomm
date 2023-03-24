# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura

## the twelve-factor app

| Factor | Description | Status |  
|--------|-------------|--------|  
| 1. Codebase | One codebase tracked in revision control, many deploys |✔️|  
| 2. Dependencies | Explicitly declare and isolate dependencies |✔️|  
| 3. Config | Store config in the environment |✔️|  
| 4. Backing services | Treat backing services as attached resources |✔️|  
| 5. Build, Release, Run | Strictly separate build and run stages |⛔|  
| 6. Processes | Execute the app as one or more stateless processes | ✔️|  
| 7. Port Binding | Export services via port binding |✔️|  
| 8. Concurrency | Scale out via the process model |✔️|  
| 9. Disposability | Maximize robustness with fast startup and graceful shutdown |✔️|  
| 10. Dev/Prod Parity | Keep development, staging, and production as similar as possible |✔️|  
| 11. Logs | Treat logs as event streams |✔️|  
| 12. Admin Processes | Run admin/management tasks as one-off processes |⛔|

<details>
<summary>Read More</summary>

1. Codebase 

    Git is used for version control, and this GitHub repository is maintains the codebase. 

2. Dependencies

    All services have their own package.json where dependencies are explicitly declared, which allows for using npm install. 

3. Config

    Some config are done in environment variables saved on an .env archive. There is room for improvement here, however. 

4. Backing Services

    The project use both MongoDB and MySQL as attached resources, accessed via a URL or credentials stored in the config. This way it's possible to connect or disconnect the database easily. 

5. Build, Release, Run

    Not applicable yet. However, the use of docker would make it easier to implement. 

6. Processes

    The processes in this project are stateless and all data that needs to be stored are saved on a backing service. 

7. Port Binding

    This project is self-contained, and exports HTTP as a service by binding to a port defined on the docker-compose. 

8. Concurrency

    This project is divided in several services that can run independently. 

9. Disposability

    The use of docker makes it easy to turn on and off every service, or the whole project. 

10. Dev/Prod Parity

    Dev, Production and Test environments are similar. 

11. Logs

    Logs are directed to the console, the app doesn't route or store its output stream.

12. Admin Processes 

    Not applicable. 
</details>

## microservices patterns

| Pattern | Applicable |
|---------|------------|
| Domain Services | Yes |
| Business Services | Yes |
| API Gateway | Not Yet. |
| Process Aggregator | Yes |
| Edge Services | Not Yet.|
| Single DB vs Multiple DBs | Multiple DBs |
| Asynchronous Events‌ | Not yet.|
| Log Aggregation | Not yet.|
| Metrics Aggregation | Not Yet.|
