Package.describe({
  git: 'https://github.com/adrprado/meteor-flow-router-helpers.git',
  name: 'adrprado:flow-router-helpers',
  summary: 'Template helpers for flow-router',
  version: '0.4.5'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'templating',
    'underscore'
  ]);

  api.use([
    'kadira:flow-router@2.0.0',
    'meteorhacks:flow-router@1.19.0'
  ], ['client', 'server'], {weak: true});

  api.addFiles('client/helpers.js', 'client');
});
