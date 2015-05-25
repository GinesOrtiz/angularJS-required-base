# About the project

It's made by [Angular Seed](https://github.com/angular/angular-seed) adding with full RequireJS file request method.

* AngularJS 1.4.x
* RequireJS 2.1.x

## Install
    bower install
    bower-installer
    cd app/resources
    compass compile

## Folder structure
    index.html
    app
      bower_components_min
      features
        feature_name
          controllers
            controllerCtrl.js
          services
            serviceSV.js
          styles
            _style.scss // Underline is required
          views
            view.html
      js
        utils
          utils.js  // Environment presets and URL tracking + basic URL pattern functions
        app.js
        controllers.js
        directives.js
        filters.js
        main.js
        routes.js
        services.js
      resources
        css
        sass
        translations
