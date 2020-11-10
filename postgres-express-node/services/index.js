const winston = require("winston");
const UserService = require("./user.service");
<<<<<<< HEAD
const MedicalTestService = require("./medical-test.service");
const { User, MedicalTest } = require("../models");
=======
const LoginService = require("./login.service");
const { User } = require("../models");
>>>>>>> 881db677b8839069823a1bed9f71e35cbe2cbecf

const logger = winston.loggers.get("logger");

exports.userServiceInstance = new UserService({ logger, userModel: User });
<<<<<<< HEAD
exports.medicalTestServiceInstance = new MedicalTestService({
  logger,
  testModel: MedicalTest,
});
=======
exports.loginServiceInstance = new LoginService({ logger, userModel: User });
>>>>>>> 881db677b8839069823a1bed9f71e35cbe2cbecf
