//reqiure js syntax
//import export --> mordern 

// import add , {mul} from "./src/funcs.js"
//const add = require("./src/funcs")

// export, export default
// module.exports

const path = require("path");

module.exports={
    entry:"./src/index.js",
    output:{
        path: path.join(__dirname, "build"),
    filename: "index.js",
    },
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] },
    {
        test:/\.js$/i,
        use: ["babel-loader"]
    }],
    },

}