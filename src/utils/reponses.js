export const SuccessResponse = (data) => {
  return ({
    code: 200,
    message: 'success',
    data,
  })
}

export const ErrorResponse = (error) => {
  return ({
    code: error.code,
    message: 'error',
    data,
  })
}