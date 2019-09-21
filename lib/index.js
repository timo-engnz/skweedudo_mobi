/**
  * @module SkweedudoMOBILib
  *
  * TODO: Add Description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const MiscController = require('./Controllers/MiscController');
const AuthRequest = require('./Models/AuthRequest');
const CreateSkweedudorRequest = require('./Models/CreateSkweedudorRequest');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of SkweedudoMOBILib
    Configuration,
    Environments,
    // controllers of SkweedudoMOBILib
    MiscController,
    // models of SkweedudoMOBILib
    AuthRequest,
    CreateSkweedudorRequest,
    // exceptions of SkweedudoMOBILib
    APIException,
};

module.exports = initializer;
