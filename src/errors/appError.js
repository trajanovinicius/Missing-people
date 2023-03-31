app.use((err, req, res, next) => {
  if (err && err.joi) {
    return res.status(400).json({
      error: {
        message: err.joi.message,
      },
    });
  }

  return next(err);
});
