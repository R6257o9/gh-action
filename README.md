<p align="center">
  <a href="http://github.com/" target="blank"><img src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2021/03/Screenshot-from-2021-03-16-12-21-00.png?fit=694%2C297&ssl=1" width="650" alt="Nest Logo" /></a>
</p>

# GitHub Actions

**_GitHub Actions_** es una plataforma de automatización que nos permite crear flujos de trabajo personalizados dentro de nuestros repositorios de GitHub.

Esta herramienta permite automatizar diferentes procesos, desde la compilación, las pruebas y el despliegue de aplicaciones.

**_¿Cuál es el papel de los flujos de integración continua y despliegue continuo en el desarrollo de software?_**

El desarrollo de software sigue un flujo compuesto por diversas fases, desde la planificación y codificación, hasta la operación y la recogida de métricas para mejorar el servicio.

Los flujos de integración continua y despliegue continuo se utilizan para automatizar estas fases, permitiendo a los desarrolladores enfocarse solo en el código y no en la logística del despliegue y las pruebas.

**_¿Por qué debería elegir GitHub Actions sobre otras herramientas de automatización de desarrollo de software?_**

Existen muchas herramientas que permiten automatizar flujos de desarrollo, pero GitHub Actions tiene varias ventajas que la destaca.

Algunas de estas ventajas son la posibilidad de automatizar cualquier cosa del flujo de trabajo de forma nativa en GitHub, la disponibilidad de miles de plantillas de automatización listas para usar, la recopilación de código y configuraciones en un solo lugar, y no tener que preocuparse por el mantenimiento del servidor.

Además, para repositorios públicos, GitHub Actions es un servicio gratuito.

## CI/CD (Continuous Integration/Continuous Deployment)

**_Github Actions_** es una plataforma de integración y despliegue continuo CI/CD (Continuous Integration/Continuous Deployment) que permite automatizar procesos de compilación, pruebas y despliegue.

El flujo CI/CD consta en 8 secciones que se repetirán cíclicamente, 4 para CI y 4 para CD.

**_CI:_**

**_Plan:_** Toda la etapa previa donde planificamos los features que integraremos al proyecto.

**_Code:_** El código que hemos desarrollado.

**_Build:_** Compilar o Interpretar el código para dejarlo listo para ser usado por algún host o fuente.

**_Test:_** Correr todas las pruebas desarrolladas para asegurar que el código funcione correctamente.

**_CD:_**

**_Release:_** Enviar nuestra build a la locación remota donde se aloja el proyecto.

**_Deploy:_** Reconfigurar y relanzar los servicios del proyecto con los nuevos features.

**_Operate:_** Mantener el proyecto a flote.

**_Measure:_** Medir con métricas la calidad del servicio.

## Conceptos básicos del flujo de trabajo con GitHub Actions

**_¿Cuáles son los componentes principales de GitHub Actions?_**

Primero, hablemos de los cuatro elementos principales de GitHub Actions: **_Workflow, Job, Step y Action_**. Cada uno encapsula al siguiente de manera jerárquica.

Por ejemplo, un Workflow puede contener uno o más Jobs, un Job puede integrar varios Steps, y un Step puede incluir un Action.

**_¿Qué es un Workflow?_**

Un Workflow es el proceso más amplio y automatizado que ejecuta uno o varios Jobs. Se define mediante un archivo YAML en la carpeta .github/workflows de cada repositorio y cada repositorio puede tener varios Workflows.

**_¿Qué es un Job?_**

Un Job es un conjunto de Steps o tareas que viven dentro de un Workflow. Los Steps de un Job siempre se ejecutan en orden y de forma secuencial, dependiendo del término del anterior.

**_¿Qué es un Step?_**

Un Step es una parte del Job que puede ser un script de Shell (un comando en la terminal) o un Action predefinido que se ejecuta.

**_¿Qué es un Action?_**

Un Action es una aplicación personalizada que realiza una tarea compleja de forma repetitiva para evitar escribir código repetitivo.

**_¿Qué otros conceptos son importantes en GitHub Actions?_**

Aparte de estos cuatro componentes clave, dos conceptos adicionales son esenciales para entender GitHub Actions: Eventos y Runners.

**_¿Qué es un Evento?_**

Un Evento es una actividad específica en el repositorio que activa la ejecución de un Workflow. Estos pueden ser internos o externos.

**_¿Qué es un Runner?_**

Un Runner es el servidor donde se ejecutan nuestros workflows. GitHub proporciona runners que tienen diferentes sistemas operativos: Ubuntu, Windows o MacOS.

**_¿Cómo se estructura un Workflow en código?_**

El formato YAML se utiliza para definir un Workflow, y se suele alojar en la carpeta .github de tu repositorio. Un archivo de workflow está organizado jerárquicamente, con etiquetas para identificar diferentes secciones, como Jobs y Steps.

**_¿Cómo se integran los Actions en un Workflow?_**

Los Actions permiten condensar múltiples tareas en una sola tarea. Estos pueden ser desarrollados por nosotros mismos, comunidades, GitHub o empresas, y están disponibles en el GitHub Marketplace.

Al final, entender y usar GitHub Actions es la clave para implementar la integración continua y el despliegue continuo - permitiendo una mejor automatización y ahorro de tiempo para los desarrolladores.

**_Ejemplo de un Workflow_**

```yml
name: hola-mundo # Nombre del workflow
on: [push] # Evento (Trigger) que lo activará
jobs: # Definición de los jobs
  hola-mundo: # Nombre del job
    runs-on: ubuntu-latest # Máquina en la que correrá
    steps: # Lista de steps del job hola-mundo
      - name: Public IP # Nombre del step
        id: ip # Identificador usable dentro del job para otros steps
        uses: haythem/public-ip@v1.3 # Usará el action haythem/public-ip
      - name: Hola mundo # Segundo step de nombre Hola mundo
        run: echo ¡Hola Mundo desde ${{ steps.ip.outputs.ipv4 }}! # Bash formatear código
```

## Creando tu primer workflow file con GitHub Actions

```yml
name: hello-world
run-name: "Hello, World! from TS script"
on:
  push:
    branches:
      - "01-hello-world"
jobs:
  hello-world:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup nodejs
        uses: actions/setup-node@v4

      - name: Setup variable
        run: echo "USERNAME=${{ github.actor }}" >> $GITHUB_ENV

      - name: Install dependencies and build
        run: |
          yarn install
          yarn start
      - name: Run main.js
        run: npm run build && node dist/main.js
```

## Triggers

**_GitHub Actions_** nos ofrece una amplia lista de '**_triggers_**' que pueden lanzar nuestros 'workflows'. Algunos de los más comunes incluyen 'push', 'pull request', 'issue', 'issue comment', 'workflow dispatch', y 'schedule'.

**_¿Cómo funciona el 'trigger' de 'push'?_**

Cuando haces 'push' de un nuevo 'commit' en alguna rama que tú definas, puedes activar un 'workflow'.

Esta acción también se puede configurar para todas las ramas y puede especificar a qué ramas afectará mediante la opción 'branches'. Y con la opción 'paths' puedes especificar qué archivos deben modificarse para que el 'workflow' se active.

**_¿Cómo se utiliza el 'trigger' de 'pull request'?_**

El 'trigger' 'pull request' ofrece características muy similares al de 'push'. Esto incluye 'branches' y 'paths', y también incluye 'types', que te permite especificar sobre qué acciones sobre 'pull request' quieres que se active.

**_¿Cómo manejar la opción 'issues' y 'issue comment'?_**

El 'trigger' 'issues' funciona de manera similar al 'pull request', y tiene los mismos 'types'. Sin embargo, 'issue comment' funciona cuando se hacen comentarios nuevos sobre un 'issue' o 'pull request', y también puedes especificar si la acción se ejecuta solo en los comentarios de un 'pull request'.

**_¿Cómo lanzar 'workflows' de forma manual con 'workflow dispatch'?_**

El 'workflow dispatch' te permite lanzar un 'workflow' de forma manual y agregar los parámetros que desees. Puedes crear 'inputs', y estos pueden ser de diferentes tipos, como una elección, un boolean, o un string.

**_¿Cómo programar eventos con el 'schedule'?_**
Finalmente, el 'trigger' 'schedule' te permite programar eventos que ocurran a intervalos regulares. Puedes especificar los minutos, la hora, el día del mes, el mes, y el día de la semana.

**_¿Cómo puedes practicar la creación de 'workflows' basados en 'triggers'?_**

Para practicar la creación de 'workflows', te recomiendo que crees un nuevo archivo 'workflow' que use al menos tres de los 'triggers' que acabamos de explicar.
