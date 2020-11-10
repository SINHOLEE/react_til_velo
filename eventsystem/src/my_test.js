class a {
  constructor() {
    this.state = {};
  }

  setstate(val) {
    this.state = val;
    console.log("aaa");
  }
}

// const aa = new a();

class b extends a {
  constructor() {
    super();
    this.el = document.getElementById("test");
    // this.el.addEventListener("click", () => {
    //   console.log(this);
    // });
    this.fuca = this.fuca.bind(this);
    this.el.addEventListener("click", this.fuca);
  }
  fuca(val) {
    console.log("this", this);
    // this.setstate(val);
  }
}

export default new b();
