var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);

        this.argument('usecasename', { type: String, required: true });
        this.option('no-sagas');

        if (this.options['no-sagas']) {
            this.skipGenerateSagas = true;
        }

        this.foldername = _.kebabCase(this.usecasename);
        this.usecasename = _.upperFirst(_.camelCase(this.usecasename));
    },
    writing: {
        createActions: function() {
            this.fs.copyTpl(
                this.templatePath('actions.js'),
                this.destinationPath(this.foldername + '/actions/' + this.usecasename + 'Actions.js'),
                { /* no args */ }
            );
        },
        createReducer: function() {
            this.fs.copyTpl(
                this.templatePath('reducer.js'),
                this.destinationPath(this.foldername + '/reducer/' + this.usecasename + 'Reducer.js'),
                { actionsName: this.usecasename + 'Actions' }
            );
        }
    }
});

// main-menu
// -- actions
// -- -- MainMenuActions.js
// -- components
// -- containers
// -- reducers
// -- sagas