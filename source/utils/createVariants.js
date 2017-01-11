export default (ns, variants) => (
  variants
  ? variants
    .split(' ')
    .map(variant => ns + variant)
  : undefined
)
