var comments = {}
comments.data = ["goo job!", "wow", "great", "awesome!!"]

comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}