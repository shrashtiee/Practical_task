import Constant from './constant';

const validation = {
  email: {
    presence: {
      allowEmpty: false,
      message: `^${Constant.NO_EMAIL}`,
    },
    email: {
      message: `^${Constant.INVALID_EMAIL_ADDRESS}`,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: `^${Constant.PASSWORD_ERROR}`,
    },
    length: {
      minimum: 6,
      message: `^${Constant.INVALID_PASSWORD_LENGTH}`,
    },
  },
};

export default validation;
