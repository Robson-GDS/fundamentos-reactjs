export function Post({ author, content}) {
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  )
}