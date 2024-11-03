new Vue({
  el: '#app',
  data: {
    lessons: [
      { subject: "Math", location: "Room 101", price: 100, spaces: 5, icon: "fas fa-calculator" },
      { subject: "English", location: "Room 102", price: 80, spaces: 5, icon: "fas fa-book" },
      { subject: "Science", location: "Lab 1", price: 120, spaces: 5, icon: "fas fa-flask" },
      { subject: "History", location: "Room 103", price: 90, spaces: 5, icon: "fas fa-landmark" },
      { subject: "Art", location: "Studio A", price: 110, spaces: 5, icon: "fas fa-palette" },
      { subject: "Music", location: "Music Room", price: 95, spaces: 5, icon: "fas fa-music" },
      { subject: "Physics", location: "Lab 2", price: 130, spaces: 5, icon: "fas fa-atom" },
      { subject: "Chemistry", location: "Lab 3", price: 125, spaces: 5, icon: "fas fa-vials" },
      { subject: "Geography", location: "Room 104", price: 85, spaces: 5, icon: "fas fa-globe" },
      { subject: "Physical Education", location: "Gym", price: 75, spaces: 5, icon: "fas fa-dumbbell" }
    ],
    sortAttribute: 'subject',  // default sort attribute
    sortOrder: 'asc', // default order
  },
  computed: {
    sortedLessons() {
      // copy lessons array to preserve default order
      let sortedArray = [...this.lessons];

      // sort array based on the selected attribute and order
      sortedArray.sort((a, b) => {
        let valueA = a[this.sortAttribute];
        let valueB = b[this.sortAttribute];
        
        if (typeof valueA === 'string') {
          valueA = valueA.toLowerCase();
          valueB = valueB.toLowerCase();
        }

        if (this.sortOrder === 'asc') {
          return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
        } else {
          return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        }
      });

      return sortedArray;
    }
  },
  methods: {
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    }
  }
});
