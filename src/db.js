const { default: mongoose } = require("mongoose");

class DB {
  constructor() {
    if (this.instance) {
      return this.instance;
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new DB();
    }
    console.log(this.instance, "instance");
    return this.instance;
  }

  connect() {
    if (this.connection) {
      console.log("Already Connected")
      this.initModels();
      return this.connection;
    }
    mongoose
      .connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.khpujpl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
      )
      .then((con) => {
        console.log("Database Connected");
        this.connection = con;
        this.initModels();
      })
      .catch((err) => console.log("Error to connect to database: ", err));
  }

  initModels() {
    this.models = require("./models");
  }
}

export default DB;
