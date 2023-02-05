# Camd Geek
<p>Sitio de venta de artículos online.</p>

## Demo
<a href="https://camduarte.github.io/camd-geek/" target="_blank">Visitar Camd Geek</a>

## Tecnologías
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavasScript
        <ul>
            <li>IIFE</li>
            <li>Promise</li>
            <li>Fetch API</li>
            <li>json-server</li>
            <li>json</li>
            <li>Rest</li>
            <li>Arrow functions</li>
            <li>Events</li>
            <li>Modules</li>
        </ul>
    </li>
</ul>

## Ejecución
<ol>
    <li>
        Clonar el proyecto:<br>
        git clone https://github.com/camduarte/camd-geek.git
    </li>
    <li>Ubicarse en la raíz del proyecto.</li>
    <li>Instalar Node.js<br>
        <a href="https://nodejs.org/es/" target="_blank">Visitar Node.js</a>
    </li>
    <li>Instalar json-server:<br>
        npm install -g json-server<br>
        <a href="https://www.npmjs.com/package/json-server" target="_blank">Visitar json-server</a>
    </li>
    <li>Lanzar json-server:<br>
        json-server --watch db.json
    </li>
    <li>Ejecutar en el servidor local de desarrollo nuestro proyecto:
        <ul>
            <li>Podes utilizar Live Server desde el Visual Studio o</li>
            <li>
                Podes utilizar Browser sync
                <ol>
                    <li>Instalar Browser sync:<br>
                        npm install -g browser-sync<br>
                        <a href="https://browsersync.io/" target="_blank">Visitar Browser sync</a>
                    </li>
                    <li>Lanzar el servidor:<br>
                        browser-sync start --server --file . --host --port 5000 --startPath ./index.html
                    </li>
                <ol>
            </li>
        </ul>
    </li>
</ol>

## Sobre el proyecto
<p>Proyecto propuesto como desafío en el curso impartido por Alura Latam + ONE.</p>

<p>¡Muchas gracias!<br>
Christian Ariel Modesto Duarte</p>
