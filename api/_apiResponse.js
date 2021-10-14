export default function apiResponse({ statusCode, message, data }) {
  if(statusCode === 100) {
    const response = {
      status: true,
      statusCode,
      data,
    };
    return response; 
  }

  if(statusCode === 101) {
    const response = {
      status: true,
      statusCode,
      message,
    };
    return response; 
  }

  if(statusCode === 109) {
    const response = {
      status: true,
      statusCode,
      data,
    };
    return response; 
  }

  if(statusCode === 110) {
    const response = {
      status: true,
      statusCode,
      message,
      data,
    };
    return response; 
  }

  if(statusCode === 400) {
    const response = {
      status: false,
      statusCode,
      message,
    };
    return response; 
  }
}
