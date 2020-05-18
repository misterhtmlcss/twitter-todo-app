# TODO App

## Instructions

1. Fork me to your own Github
2. Git clone me to your local git
3. From the command line and inside your cloned directory run `npm install`.
3b. If it gave an error and said `node not found` or some error to that effect, do 3c
3c. You likely don't have Node.js installed, so proceed to Nodejs.org, download and install nodejs there.
4. Again from the command line and inside your cloned directory run `npm install`.
5. From the command line type `code .` => the previous command only works with VS Code.
5b. You don't use VS Code or the command doesn't work for some reason. Open a VS Code window, click on Open Folder nad navigate to the cloned directory and open it.
6. You should see these files in the left sidebar of your IDE (VS Code, Atom, etc) `.gitignore, node_modules, package.json, package-lock.json` and this file `README.md`.
6b. If you don't see `node_modules` run `npm install` from the director you are in via your terminal, IDE integrated terminal or another means; sadly I can't list them all.
7. Run `npm run dev`. This will launch the node development server called `nodemon`; look in your package.json and you'll see it listed there.
8. Open a browser and browse to http://localhost:5000 and you should get a /GET error. This error tells you the Node/Express server is running!
9. Good luck!

### YouTube video of the above setup instructions
- If you get stuck; watch the below video.
- Link:

## Objectives - Week 1
- API for CRUD (CREATE, READ, UPDATE, DELETE) actions.
- Create 1 or 4 routes ex. `/api || /api/add` that will run all 4 of the above CRUD actions
- Using POSTMAN show your peers how you application carries out these actions
- Must be able to explain what is happening via video/zoom demo what is happening in the application in less than 10min + 5min discussing code

## Tips - Week 1
- Don't refactor your code before it's feature complete and works
- Don't add a UI unless the code is completely done and refactored, because UI is a stretch goal
- Use POSTMAN exclusively: https://www.postman.com/