// @ts-check
/** @type {import('nlptoolkit-wordnet/dist/WordNet.js').WordNet} */

// const express = require('express');
import express from 'express';

// const { WordNet } = require('nlptoolkit-wordnet/dist/WordNet');
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
