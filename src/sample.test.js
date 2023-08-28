const webdriver = require('selenium-webdriver');
const { Builder, By } = webdriver;

// Configura las capacidades del navegador
const desiredCapabilities = {
  'browserstack.user': 'valentncoletta_WmBGTf',
  'browserstack.key': 'XRYdDq7HssHzuK162bp5',
  'browserName': 'Chrome',
  'browser_version': '103.0',
  'os': 'Windows',
  'os_version': '11',
  'name': 'Prueba desde el cole :v'
};

describe('Sample Test Suite', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .usingServer('http://hub-cloud.browserstack.com/wd/hub')
      .withCapabilities(desiredCapabilities)
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Login and Form Submission Test', async () => {
    // Abre la página de tu aplicación
    await driver.get('https://app-c5g9.onrender.com/');

    // Encuentra y haz clic en el enlace de login en la barra de navegación
    await driver.findElement(By.linkText('Login')).click();

    await driver.takeScreenshot();
    console.log('Captura de pantalla 1 tomada');
    
    const title1 = await driver.getTitle();
    console.log('Título de la página:', title1);

    // Ingresa el email y la contraseña
    await driver.findElement(By.name('email')).sendKeys('123');
    await driver.findElement(By.name('password')).sendKeys('123456');

    await driver.findElement(By.css('button[type=submit]')).click();

    const title2 = await driver.getTitle();
    console.log('Título de la página:', title2);

    await driver.findElement(By.name('id')).sendKeys('666');
    await driver.findElement(By.name('nombre')).sendKeys('satanas');
    await driver.findElement(By.name('consumo')).sendKeys('260611');

    await driver.findElement(By.css('button[type=submit]')).click(); 

    await driver.takeScreenshot();
    console.log('Captura de pantalla 2 tomada');
  });
});
