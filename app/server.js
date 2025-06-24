// @ts-check
/** @type {import('nlptoolkit-wordnet/dist/WordNet.js').WordNet} */

// CommonJS
// const express = require('express');
// const { WordNet } = require('nlptoolkit-wordnet/dist/WordNet');

// ESModule (set "type": "module" in package.json)
import express from 'express';
import { WordNet } from 'nlptoolkit-wordnet/dist/WordNet.js';

const wn = new WordNet();

const app = express();
const PORT = process.env.PORT || 3009;

app.get('/', (req, res) => {
  const literals = Array.from(wn.getLiteralList());
  res.send(literals[0] || "No literals found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
