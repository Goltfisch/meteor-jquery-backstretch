Package.describe({
  name: 'goltfisch:jquery-backstretch',
  summary: 'jQuery Backstretch repackages for Meteor',
  version: '0.2.0',
  git: 'https://github.com/goltfisch/meteor-jquery-backstretch.git'
});

Package.onUse(function (api) {
  api.addFiles('backstretch.min.js', 'client');

  api.use('jquery@1.11.3_2', 'client');
});
