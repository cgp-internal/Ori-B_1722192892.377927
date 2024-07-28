const statusCodeMap = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
};

const handleResponse = (res, statusCode = 200, data = {}, error = null) => {
  if (error) {
    res.status(statusCode).json({ 
      error: error.message || statusCodeMap[statusCode], 
      statusCode 
    });
  } else {
    res.status(statusCode).json({ data });
  }
};

module.exports = { handleResponse };