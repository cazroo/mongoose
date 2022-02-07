const yargs = require(`yargs`);
const connection = require("./db/connections.js");
const {addMovie, listMovies, editMovie} = require(`./utils/index.js`);

const command = yargs.argv._[0];

const app = async (args) => {
    try {
        if (command === `add`) {
            await addMovie({title: args.title, actor: args.actor})
        } else if (command === `list`) {
            await connection(listMovies)
        } else if (command === `edit`) {
            await editMovie({title:args.title, actor: args.actor})
        }
    } catch (error) {
        console.log(error)
    }
}
app(yargs.argv)