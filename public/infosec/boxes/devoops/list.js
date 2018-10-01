var sources = [
  0,
  '{}',
  0,
  '{}'
]

for (let i = 0; i < sources.length; i++) {
  var source = sources[i]

  try {
    console.log(JSON.parse(source))
  } catch (err) {
    console.log(i, 'failed')
  }
}
