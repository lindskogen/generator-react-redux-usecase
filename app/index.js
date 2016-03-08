var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);

        this.argument('usecasename', { type: String, required: true });
        this.option('sagas', {defaults: true});
        this.option('no-sagas');

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
        },
        createSagas: function() {
            if (!this.options.sagas) return;

            this.fs.copyTpl(
                this.templatePath('sagas.js'),
                this.destinationPath(this.foldername + '/sagas/' + this.usecasename + 'Saga.js'),
                { actionsName: this.usecasename + 'Actions', actionVariableName: _.lowerFirst(this.usecasename + 'Actions') }
            );
        },
        createComponents: function() {
            this.fs.write(
                this.destinationPath(this.foldername + '/components/' + this.usecasename + 'Component.js'),
                '\n'
            );
        },
        createContainers: function() {
            this.fs.write(
                this.destinationPath(this.foldername + '/containers/' + this.usecasename + 'Container.js'),
                '\n'
            );
        }
    }
});
