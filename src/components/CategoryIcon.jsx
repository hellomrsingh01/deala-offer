// Renders a category's icon: an emoji for categories without a CDN image,
// otherwise the image. Callers pass the size class for each case.
export default function CategoryIcon({ category, imgClass, emojiClass }) {
  if (category.emoji) {
    return (
      <span className={emojiClass} role="img" aria-label={category.name}>
        {category.emoji}
      </span>
    )
  }
  return (
    <img
      referrerPolicy="no-referrer"
      src={category.img}
      alt={category.name}
      className={imgClass}
    />
  )
}
