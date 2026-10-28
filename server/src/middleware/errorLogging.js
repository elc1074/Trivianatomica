export function logFailedResponses(req, res, next) {
  const startedAt = Date.now()
  const sendJson = res.json.bind(res)

  res.json = (body) => {
    if (res.statusCode >= 400) res.locals.errorBody = body
    return sendJson(body)
  }

  res.on('finish', () => {
    if (res.statusCode < 400) return

    const { error, code } = res.locals.errorBody ?? {}
    const details = [
      `${req.method} ${req.originalUrl} -> ${res.statusCode}`,
      `${Date.now() - startedAt}ms`,
      code && `code=${code}`,
      req.user && `user=${req.user.id}`,
      error && `error="${error}"`,
    ].filter(Boolean)

    const log = res.statusCode >= 500 ? console.error : console.warn
    log(`[${new Date().toISOString()}] ${details.join(' ')}`)
  })

  next()
}

export function handleUnexpectedError(error, req, res, _next) {
  const status = error.status ?? 500
  const isClientError = status < 500

  if (!isClientError) {
    console.error(`[${new Date().toISOString()}] unhandled error on ${req.method} ${req.originalUrl}\n${error.stack ?? error.message}`)
  }

  if (res.headersSent) return

  res.status(status).json({
    error: isClientError ? error.message : 'internal server error',
    code: isClientError ? 'bad_request' : 'internal_error',
  })
}
