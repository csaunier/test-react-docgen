#!/usr/bin/env node

const docgen = require('react-docgen');
const filePath = 'src/Button/Button.jsx';
const fileContent = require('fs').readFileSync(filePath, 'utf8');

const componentInfoImport = docgen.parse(fileContent, null, null, {
  importer: docgen.importers.makeFsImporter(),
  filename: filePath,
});

console.log('DOCGEN = ', componentInfoImport);