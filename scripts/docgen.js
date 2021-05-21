#!/usr/bin/env node

const docgen = require('react-docgen');
const src = require('fs').readFileSync('src/Button/Button.jsx');

const componentInfoImport = docgen.parse(src, null, null, { importer: docgen.importers.makeFsImporter() } );

console.log('DOCGEN = ', componentInfoImport);