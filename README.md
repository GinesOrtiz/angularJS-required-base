# About the project

It's made by [Angular Seed](https://github.com/angular/angular-seed) adding with full RequireJS file request method.

* AngularJS 1.4.x
* RequireJS 2.1.x

## Install
    bower install
    bower-installer
    cd app/resources
    compass compile

## TODO
- [ ] Implement GULP to make production environment
- [ ] Comment functions in the code
- [ ] Add default filters and directives

## Folder structure
    index.html
    app
      bower_components_min
      features
        feature_name
          controllers
            controllerCT.js
          services
            serviceSV.js
          directives
            directiveDR.js
          styles
            _style.scss // Underline is required
          views
            _directivetemplate.html // Underline to distinct
            view.html
      js
        utils
          utils.js  // Environment presets and URL tracking + basic URL pattern functions
        app.js
        config.js
        filters.js
        main.js
        modules.js
        translation.js
      resources
        css
        sass
        translations
          lang.json
          
## How it works
### The recipe:
Simplicity and a little bit of magic. The main idea of the project was to make a seed that grow as much as we want. How to make it easy? Modules. The project is made in a own config files that make so fast to create little packages with certain components easyly addable and removeble.

### Firsts steps: know how magic works
#### Modules
The main character of the trick. These folders are made by a config file and bunch of others such as controllers, directives, views, styles and services.

##### js/config.js
In this file there's two parts that must be edited.
The modules we'll use in the project: 

        var features = [
        '../features/movie/config',
        '../features/serie/config',
        '../features/header/config'
    ];
    
And the default route we'll get if the provider route doesn't extist:
    
    var otherwiseRedirect = '/movie';


##### feature/module/config.js
You know what grinds my gears? Declare everywhere all the packages I want to use. 
First we need to declarate all the directives and services we are going to use at that module: (Remember to use absolute path of the file)

    define([
        'utils', // Required
        '/app/features/serie/services/serieSV.js',  // End service with SV
        '/app/features/serie/directives/serieDR.js' // End directive with DR
    ]
    
Once we have all the services and directives declared lets start with the controllers and routes.

    var featureConfig = {
            folder: 'serie',    // This is our modules's folder
            controllers: [
                {
                    name: 'serieCT',    // Controller's name should end by CT
                    stylePath : 'serie' // Remember this one!
                }
            ],
            routes: [
                {
                    url: '/serie',  // URL we will use
                    tpl: 'serie',   // Name from views folder (no extension)
                    ctrl: 'serieCT' // Same as above
                }
            ]
        };
        

##### StylePath variable
There's something that we all know: 10 > 1. Witch can be translated in "Id are stronger than Class". When you are writting tons of SASS lines you forget to check if that little, small and stupid change ruined the entire project.
In order to prevent that (thanks me latter), this seed provides a small system that, depending of the controller in config declaration, shows just the SASS file you need.

Inside resources/sass there's a single file called "general.scss". This file is used as a container for all the styles. This is how it works:

    #serie { // The ID of stylePath
        @import '../../features/serie/styles/_serie';   // _sass file from module
    }
    
Remember to name with an underline at the beggening the sass file
