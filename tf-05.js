const fs = require('fs').promises;
const chalk = require('chalk');

async function executar() {
    try {
        console.log(chalk.yellow("Iniciando a atividade..."));

        await fs.mkdir('./storage', { recursive: true });

        const texto = "Aula 05 - Manipulação de arquivos com Node.js.\n\nArquivo criado com sucesso durante a atividade final.";
        await fs.writeFile('./storage/aula05.txt', texto);
        
        console.log(chalk.green("Arquivo criado com sucesso na pasta storage!"));

        const conteudoLido = await fs.readFile('./storage/aula05.txt', 'utf-8');
        
        console.log(chalk.blue("\nConteúdo do arquivo:"));
        console.log(conteudoLido);
        console.log(chalk.green("\nAtividade finalizada com sucesso!"));

    } catch (erro) {
        console.log(chalk.red("Deu algum erro: ", erro));
    }
}

executar();