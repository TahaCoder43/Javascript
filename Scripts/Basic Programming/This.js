car1 = {
    x: 10,
    y: 20,
    speed: 5,
    move: function(time) {
        this.x += 5*time
    }
}

function func1() {
    this.alert(car1.x);
    car1.move(10);
    this.alert(car1.x);
}
