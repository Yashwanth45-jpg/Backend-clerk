const express = require('express');
const bodyParser = require('body-parser');
const { Webhook } = require('svix');
const mongoose = require('mongoose');
const User = require('./models/user.models');

const app = express();

module.exports = app;