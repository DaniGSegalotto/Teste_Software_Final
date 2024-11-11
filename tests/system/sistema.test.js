const { Builder, By, until } = require('selenium-webdriver');

(async function testeCriarUsuario() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Acessa a página de cadastro de usuários
        await driver.get('http://localhost:3000'); // Altere para o URL correto da sua aplicação

        // Preenche o formulário de cadastro
        const inputNome = await driver.findElement(By.id('nome'));
        const inputEmail = await driver.findElement(By.id('email'));

        await inputNome.sendKeys('Teste'); // Preenche o nome
        await inputEmail.sendKeys('Teste@gmail.com'); // Preenche o email

        // Envia o formulário
        const botaoCadastrar = await driver.findElement(By.css('button[type="submit"]'));
        await botaoCadastrar.click(); // Clica no botão de cadastro

        // Espera o processo de envio ser concluído (ajuste o tempo de espera conforme necessário)
        await driver.sleep(5000); // Aguarda 5 segundos para garantir que o envio foi feito

    } catch (error) {
        console.error('Erro durante o teste:', error);
    } finally {
        await driver.quit();
    }
})();
