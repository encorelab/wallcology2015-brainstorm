

(function () {
  "use strict";

  this.Skeletor = this.Skeletor || {};
  this.Skeletor.Smartboard = this.Skeletor.Smartboard || {};
  var Smartboard = this.Skeletor.Smartboard;

  Smartboard.Router = new (Backbone.Router.extend({
    routes: {
      '' : 'index',
      'ben': 'initClassBen',
      'mike': 'initClassMike',
      'test': 'initClassTest',
      'benBoard2': 'initBenBoard2',
      'mikeBoard2': 'initMikeBoard2',
      'serevetas1': 'initSerevetas1',
      'serevetas2': 'initSerevetas2',
      'serevetas3': 'initSerevetas3'
    },
    initialize: function() {

    },
    index: function() {
      console.log("routing on - you may need to specify a user in the URL");
    },
    initClassBen: function () {
      Skeletor.Smartboard.init('ben');
    },
    initClassMike: function () {
      Skeletor.Smartboard.init('mike');
    },
    initClassTest: function () {
      Skeletor.Smartboard.init('test');
    },
    initBenBoard2: function () {
      Skeletor.Smartboard.init('benBoard2');
    },
    initMikeBoard2: function () {
      Skeletor.Smartboard.init('mikeBoard2');
    },
    initSerevetas1: function () {
      Skeletor.Smartboard.init('serevetas1');
    },
    initSerevetas2: function () {
      Skeletor.Smartboard.init('serevetas2');
    },
    initSerevetas3: function () {
      Skeletor.Smartboard.init('serevetas3');
    },
    start: function() {
      // to allow single page app with various routes
      Backbone.history.start();
      // Skeletor.Smartboard.init();
    }
  }))();

  this.Skeletor.Smartboard = Smartboard;
  return this.Skeletor.Smartboard;

}).call(this);