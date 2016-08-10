## Angular2 Express slim starter
### Heroku ready wih SystemJS builder

- Angular 2 RC.5 ( https://angular.io/docs/ts/latest/quickstart.html )
- Express ( from generator )

https://express-angular2-slim.herokuapp.com/

## Install
```bash
git clone https://github.com/vladotesanovic/angular2-express-slim
cd angular2-express-slim

# Install dependencies
npm install && npm run typings

# run and watch for changes in .ts files
npm start

# Applciation url: http://localhost:3000
```

## Development
Uncomment in public/index.html:

```html
<script src="js/systemjs.config.js"></script>
<script>
  System.import('main')
        .then(null, console.error.bind(console));
</script>
```

Comment out
```html
<!-- Production mod -->
<script src="js/bundle.min.js"></script>
```