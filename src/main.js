
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
    services: [
      { url: 'pselker@cisco.com', name: 'Loan' },
      { url: 'pselker@cisco.com', name: 'Advice' },
      { url: 'erica.talking@ivr.vc', name: 'Credit' },
    ],
  });

}

document.addEventListener('alpine:init', setup);

