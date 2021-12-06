 // optional init
 window.onload = function() {
    window.micAccessTool = new MicAccessTool({
      link: 'http://your-awesome-website.com/your-accessibility-declaration.pdf',
      contact: 'mailto:your-mail@your-awesome-website.com',
      buttonPosition: 'left', // default is 'left'
      // forceLang: 'ru-RU' // default is 'en' may be 'he-IL' or 'ru-RU'
    });
  }