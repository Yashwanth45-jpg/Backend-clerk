const express = require('express');
const bodyParser = require('body-parser');
const { Webhook } = require('svix');
const mongoose = require('mongoose');
const User = require('./src/models/user.models.js');

const app = express();

module.exports = app;