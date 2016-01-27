/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/*jshint forin:true, noarg:false, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, curly:false, browser:true,
  unused:true,
  indent:2, maxerr:50, devel:true, node:true, boss:true, white:true,
  globalstrict:true, nomen:false, newcap:true, esnext: true, moz: true,
  asi: true
  */

/*global describe, it, require, console, beforeEach, afterEach, before */

/*
  THIS IS A SHIM / HACK

  Notes:

  1. for funsies, these are all synchronous.   Wouldn't be really.
  2. should do sendMessage type stuff
  3. Cribbed from UITour.js
*/


"use strict";

// create namespace
if (typeof Mozilla == 'undefined') {
  var Mozilla = {};
}

;(function($) {
  'use strict';

  //"☂⚛☤"
  var say = console.log.bind(console, "shield ☻☻☻☻☻");

  var ask = say.bind(say, "??? ");

  // create namespace
  if (typeof Mozilla.Shield == 'undefined') {
    Mozilla.Shield = {};
  }

  Mozilla.Shield.resetHome = function (garbage) {
    say("HOME is reset, from ", garbage);
  }

  Mozilla.Shield.resetSearch = function (garbage) {
    // claim: this should be by engine url?
    // name isn't enough, and is fuzzable.
    // this needs to be subtle:
    // - if google, yahoo, then partner code
    // - otherwise by url
    // - otherwise by name
    say("SEARCH is reset, was ", garbage);
  }

  Mozilla.Shield.offerUpgrade = function () {
    ask("your fx is ancient.  upgrade?");
    say("upgrading fx, buckle your seatbelt");
  }

  Mozilla.Shield.uninstallAddon = function (name) {
    say("Now unisntalling addon", name);
    say("done");
  }

  Mozilla.Shield.remember = function () {
    // locally stored, for local audit
    // - remember previous answers from user
    // - don't repeat previous work
    // - remember
    say("REMEMBERING", arguments);
  }

  Mozilla.Shield.personInfo = function () {
    var info = {
      version: "41.0.1",
      os: "Finux",
      outOfDate: true,
      addons: [
        "adblock minus",
        "ghosterF",
        "brony-fy"
      ],
      geo: "us",
      crashes: {
        1: 0,
        7: 1,
        30: 2,
        ever:  3
      },
      profileAge: 44,
      searchEngine: 'garbageCo',
      homePage: 'stealMyInfo'
    }
    say("personInfo", info);
    return info
  }

  Mozilla.Shield.telemetry = function () {
    // phone home, for aggregation.
    say("recording telemetry", arguments);
  }

  Mozilla.Shield.proveIt = function () {
    // maybe during next run?  belt and suspenders.
    // stored future code or assertion spec?
    say("future, will prove that the fix worked", arguments);
  }

  Mozilla.Shield.say = say;
  Mozilla.Shield.ask = ask;


})();

// Make this library Require-able.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Mozilla.Shield;
}
