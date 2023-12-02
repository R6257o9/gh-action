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

```yml
name: hello-world
run-name: "Hello, World! from TS script"
on:
  push:
    branches:
      - "main"
      - "realease/**
    paths:
      - "**.ts" # el workflow va a correr cuando hacemos un push sobre cualquier archivo .ts
```

**_¿Cómo se utiliza el 'trigger' de 'pull request'?_**

El 'trigger' 'pull request' ofrece características muy similares al de 'push'. Esto incluye 'branches' y 'paths', y también incluye 'types', que te permite especificar sobre qué acciones sobre 'pull request' quieres que se active.

```yml
name: hello-world
run-name: "Hello, World! from TS script"
on:
  pull-request:
    types: # nos permite tomar sub acciones sobre un pull request
      - [opened, labeled] # se va a correr cuando se abra un pull request (opened) o cuando alguien le agregue una etiqueta (labeled) a al pull request
    branches:
      - "realease/**
    paths:
      - "**.ts" # el workflow va a correr cuando hacemos un push sobre cualquier archivo .ts
```

**_¿Cómo manejar la opción 'issues' y 'issue comment'?_**

El 'trigger' 'issues' funciona de manera similar al 'pull request', y tiene los mismos 'types'. Sin embargo, 'issue comment' funciona cuando se hacen comentarios nuevos sobre un 'issue' o 'pull request', y también puedes especificar si la acción se ejecuta solo en los comentarios de un 'pull request'.

`issues`

```yml
name: hello-world
run-name: "Hello, World! from TS script"
on:
  issues:
    types: # nos permite tomar sub acciones sobre un issue
      - [opened, edited, closed] # se va a correr cuando se abra un issue (opened), se edite (edited) o cierre (closed) el issue
```

`issue-comment`

```yml
name: hello-world
run-name: "Hello, World! from TS script"
on:
  issues_comment: # comentarios sobre un issue
    types: # nos permite tomar sub acciones sobre un issue-comment
      - [created, deleted] # se va a correr cuando se cree (created) o elimine (deleted) el issue-comment
on: issue_comment
jobs:
  pr_commented: # comentarios sobre pull request
    name: PR comment
    if: ${{ github.event.issue.pull_request }}
```

**_¿Cómo lanzar 'workflows' de forma manual con 'workflow dispatch'?_**

El 'workflow dispatch' te permite lanzar un 'workflow' de forma manual y agregar los parámetros que desees. Puedes crear 'inputs', y estos pueden ser de diferentes tipos, como una elección, un boolean, o un string.

```yml
name: hello-world
run-name: "Hello, World! from TS script"
on:
  workflow_dispatch: # corre un workflow de manera manual
    inputs: # inputs de alerta con una descripcion, es requerido, con un valor por default (medio) de tipo eleccion (type: choice)
      alerta:
        description: "nivel"
        required: true
        default: medio
        type: choice
        options:
          - bajo
          - medio
```

```yml
name: hello-world
run-name: "Hello, World! from TS script"
on:
  workflow_dispatch: # corre un workflow de manera manual
    inputs:
      tags:
        description: "Opcional"
        required: false
        type: boolean
      environment:
        description: "Objetivo"
        type: string
        required: true
```

**_¿Cómo programar eventos con el 'schedule'?_**
Finalmente, el 'trigger' 'schedule' te permite programar eventos que ocurran a intervalos regulares. Puedes especificar los minutos, la hora, el día del mes, el mes, y el día de la semana.

**_¿Cómo puedes practicar la creación de 'workflows' basados en 'triggers'?_**

Para practicar la creación de 'workflows', te recomiendo que crees un nuevo archivo 'workflow' que use al menos tres de los 'triggers' que acabamos de explicar.

**_¿Cómo se utilizan las expresiones en GitHub Actions?_**

Las expresiones son elementos indispensables en GitHub Actions. Permiten acceder a valores literales o de variables, comparar diferentes expresiones y utilizar varias funciones.

Existen muchas funciones comunes, como `if`, `contains`, `toJson` y `fromJson`, que desempeñan roles esenciales en el control de los workflows. Por ejemplo, la función if se puede usar para determinar si se ejecuta un trabajo, mientras que contains puede restringir la ejecución a situaciones específicas.

Por ahora, te animo a jugar con lo que has aprendido y te desafío a crear un archivo workflow llamado 'expresiones.yml' que utilice al menos tres de las expresiones que hemos discutido.

## Expresiones

**_¿Qué son las expresiones en GitHub Actions y cómo se usan?_**

Vamos a trabajar con el archivo expresiones.yml que creamos anteriormente

La sección de ayuda nos muestra que este archivo tiene un workflow dispatch como trigger, y dentro de este, se definen dos inputs: edad (un número) y nombre (un string).

El job "mayor" verifica si edad >= número establecido. Si es cierto, se muestra "mayoría de edad" en la terminal.

El segundo job verifica si edad < número designado. Si es cierto, muestra "minoría de edad".

## Contextos

**_¿Por qué son importantes los contextos en GitHub Actions?_**

Ahora que dominamos las expresiones, es tiempo de enfocarnos en los contextos. Un contexto en GitHub Actions es una forma de acceder a información relevante sobre ejecuciones de workflows, variables, entorno de runners, jobs y steps.

Exploraremos los diferentes tipos de contextos que GitHub Actions nos ofrece y lo que podemos obtener de cada uno de ellos.

**_¿Cuáles son los principales contextos que nos ofrece GitHub Actions?_**

GitHub Actions ofrece una variedad de contextos, los más destacados son:

**_GitHub Context:_** Detalles ejecución workflow. Ejemplo: github.actor obtiene nombre usuario actual.

**_ENV Context:_** Acceso variables en flujo, job o pasos. Más detalles próx. clase.

**_Contexto Vars:_** Acceso vars guardadas a nivel de ambiente, repo u org.

**_Contexto Job:_** Info job actual. Acceso por nombre o identificador.

**_Contexto Steps:_** Info steps actuales.

**_Contexto Runner:_** Acceso info runner job.

**_Contexto Secrets:_** Acceso a nombres y valores secretos en repo u org.

**_Contexto Inputs:_** Usar entradas info en ciertos triggers.

**_¿Cómo se usa un contexto en un workflow file?_**

Un ejemplo de uso de contexto es un workflow file llamado "contexto" que se ejecuta en cada push a cualquier rama. Dentro de este file, hay un job llamado "checkMain" que verifica si estamos en la rama main usando el contexto GitHub y el atributo github.ref. Si estamos en la rama main, este job imprimirá "Desplegando en la rama main" en la terminal.

Los contextos nos permiten acceder a información relevante de GitHub Actions, abriendo puertas para una configuración más innovadora y eficiente de nuestros jobs. Te animo a crear un nuevo archivo de workflow llamado contextos.yml empleando al menos un contexto

## Variables

Iniciamos nuestra exploración en el Marketplace de GitHub, donde descubrimos diferentes Actions. Para nuestro ejemplo, seleccionamos 'Deploy Docker to AWS'. Este Action toma una aplicación Docker y la despliega en una instancia S2 de AWS.

**_¿Qué pide este Action de AWS para funcionar?_**

El Action requiere que le configuremos varias variables. Por medio de Secrets, podemos configurar un access key ID, un secret access key, una default region y un .env. Esto es lo que necesita el Action para subir una aplicación de Docker a una instancia S2 de AWS.

Los valores de estas variables se obtienen de las credenciales de nuestra cuenta AWS. Se guardan en el repositorio de GitHub como secrets, protegiendo así su seguridad.

A partir de ahí, podemos copiar el Workflow que utiliza estos secrets en caso de necesidad si queremos subir una aplicación Docker a AWS.

**_¿Cómo podemos verificar y depurar un Workflow?_**

Una vez implementado el Workflow, es importante revisar los logs para verificar que está funcionando correctamente. En la pestaña de actions, se pueden ver los logs de cada ejecución del Workflow.

Por ejemplo, al explorar un Workflow fallido, podemos ver el error 'process completed with exit code 1', indicando que el proceso no se completó correctamente. Detallando cada uno de los jobs, podemos identificar el paso donde se produjo el fallo.

Aunque GitHub indica si un job ha sido exitoso o no, siempre es importante revisar los logs, ya que pueden existir errores no detectados por GitHub.

**_¿Cómo resolver problemas en los Workflows?_**

Al revisar los logs, observamos que el saludo del Workflow 'saludos y secretos' no se mostraba correctamente. El análisis de los logs reveló que la variable 'saludo' solo estaba configurada para el job 'saludo variables' y no para el job 'saludos y secretos'.

Para solucionar este problema, es necesario agregar la variable 'saludo' al job 'saludos y secretos'. Con este arreglo, el saludo se muestra correctamente en los logs, indicando que el Workflow está funcionando como se esperaba.

**_¿Cómo evitar errores al crear nuevos Workflows?_**

Cuando se crea un nuevo Workflow, es esencial probarlo varias veces y revisar cuidadosamente todos los logs. De esta manera, podemos estar seguros de que el Workflow funciona como se espera.
