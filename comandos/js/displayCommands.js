let commandHtmlResumed = function (command, i) {
    return `
    <div>
        <div class="commDiv">
            <p>
                <code>${command.syntax[0]}</code> - ${command.description} 
                <a onclick="scr('cmd${i}')">Ver mais</a>
            </p>
        </div>
    </div>`
}

let commandHtmlCompleted = function (command, i) {
    if (!command.serverLevelPermission) command.serverLevelPermission = 1
    return `
    <div>
        <div id="cmd${i}" class="commDiv">
            <p>Sintaxe: <code>${command.use}</code></p>
                ${command.example ? `<p>Exemplo de uso: <code>${command.example}</code></p>`: ""}
                <p class="description">Descrição: ${command.description}</p>
            <p>Nível de permissão de servidor requerido: ${command.serverLevelPermission}</p>
        </div>
    </div>`
}

let displayCommands = {
    all: function (commands) {
        for (let i = 0; i < commands.length; i++) {
            commands.sort((a1, a2) => a1.syntax[0] > a2.syntax[0] ? 1 : -1)
            document.getElementById("commandResumed").innerHTML += commandHtmlResumed(commands[i], i)
            document.getElementById("commandCompleted").innerHTML += commandHtmlCompleted(commands[i], i)
        }
    }
}