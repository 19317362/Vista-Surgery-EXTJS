Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['role', 'name', 'facility', 'loremIpsum'],

    proxy: {
        type: 'rest',
        url : '/user'
    }
});

var store = Ext.create('Ext.data.Store', {
    model: 'User'
});

store.load(); //GET /users

// Ext.define('VistA.Surgery.view.main.InfoModel', {
//     extend: 'Ext.app.ViewModel',
//     alias: 'viewmodel.info',
//     data: {
//         name: 'Cobblepot IV, Oswald',
//         role: "Surgeon",
//         facility: "Kodak",
//         loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     }
// });
