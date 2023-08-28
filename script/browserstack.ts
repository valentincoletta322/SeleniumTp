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

async function takeScreenshot() {
  // Crea una instancia del controlador de Selenium
  const driver = await new Builder()
    .usingServer('http://hub-cloud.browserstack.com/wd/hub')
    .withCapabilities(desiredCapabilities)
    .build();

  try {
    // Abre la página de tu aplicación
    await driver.get('https://app-c5g9.onrender.com/');

    // Encuentra y haz clic en el enlace de login en la barra de navegación
    await driver.findElement(By.linkText('Login')).click();

    await driver.takeScreenshot();
    console.log('Captura de pantalla 1 tomada');
    
    driver.getTitle().then((title: any) => {
        console.log('Título de la página:', title);
      });

    // Ingresa el email y la contraseña
    await driver.findElement(By.name('email')).sendKeys('123');
    await driver.findElement(By.name('password')).sendKeys('123456');

    await driver.findElement(By.css('button[type=submit]')).click();

    driver.getTitle().then((title: any) => {
        console.log('Título de la página:', title);
      });

    await driver.findElement(By.name('id')).sendKeys('666');
    await driver.findElement(By.name('nombre')).sendKeys('satanas');
    await driver.findElement(By.name('consumo')).sendKeys('260611');

    await driver.findElement(By.css('button[type=submit]')).click(); 

    await driver.takeScreenshot();
    console.log('Captura de pantalla 2 tomada');

  } finally {
    // Cierra la ventana del navegador y finaliza la prueba
    await driver.quit();
  }
}