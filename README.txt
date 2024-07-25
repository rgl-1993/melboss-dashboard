Ejecución del proyecto:

Requisitos: Para poder ejecutar el proyecto es necesario tener instalado de manera global 'json-server' y 
el gestor de paquetes pnpm.

Para ejecutar el proyecto, hay que descargarse el proyecto desde GitHub. A continuación abrirlo con
un editor como por ejemplo Visual Studio Code y abrir dos terminales.

En la primera terminal, ubicarse en el directorio donde se encuentra el archivo 'db.json', que es en la
raíz del proyecto y ejecutar el siguiente comando:
json-server --watch db.json --port 3001

En la otra terminal hay que ubicarse dentro de la carpeta app, que estaría en '/app' y ejecutar el siguiente
comando:
pnpm dev

Explicación sobre el proyecto:
Únicamente he desarrollado parte del frontend, pero sin test funcionales ni unitario, tampoco he hecho el desarrollo
para que puediera verse en español e inglés como se requería. Además he de añadir que por ejemplo la parte de la
fecha de finalización y los días pendientes está mal hecha. Por último, quería comentar que no he utilizado Docker
porque no me ha dado tiemop a aprender esta tecnología y aplicarla en el proyecto.