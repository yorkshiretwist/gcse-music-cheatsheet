# GCSE Music Cheatsheet

This site was built for two reasons:

1. To provide a place for my son to gether information useful for his GCSE music course
2. To test deploying a site with eleventy (https://www.11ty.dev/) and netlify (https://www.netlify.com)

Build status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/2f54f7be-6acc-4dad-a89e-8431c0fd73ec/deploy-status)](https://app.netlify.com/sites/gcse-music-cheatsheet/deploys)

## Building and running the app

First install depenencies:

`npm install`

Then run Eleventy like this:

`npx eleventy`

Or build and host locally for local development

`npx eleventy --serve`

Or build automatically when a template changes:

`npx eleventy --watch`

Or in debug mode:

`DEBUG=* npx eleventy`
