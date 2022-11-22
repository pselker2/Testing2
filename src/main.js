
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
      { url: 'pselker@cisco.call.ciscospark.com', name: 'Bookings' },
      { url: 'luvelasc@cisco.call.ciscospark.com', name: 'Support' },
      { url: 'erica.talking@ivr.vc', name: 'Directory' },
    ],
  });

}

document.addEventListener('alpine:init', setup);

