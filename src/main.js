
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
      ],
      services2: [
        { url: 'luvelasc@cisco.call.ciscospark.com', name: 'Luis Velasco' },
        { url: 'tyosgood@cisco.call.ciscospark.com', name: 'Tyler Osgood' },
        { url: 'jmulkeri@cisco.call.ciscospark.com', name: 'Jay Mulkerin' },
        { url: 'evazzana@cisco.call.ciscospark.com', name: 'Eric Vazzana' },
      ],
    });
  
  }
  
  
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDirFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  */

  document.addEventListener('alpine:init', setup);
 