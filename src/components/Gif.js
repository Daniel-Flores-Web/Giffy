export default function Gif({ id, title, url }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={url} />
    </div>
  );
}
// eslint-disable-line
