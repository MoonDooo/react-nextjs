export default function NewsPage({ params }) {
  const newsId = params.id;

  return (
    <>
      <h1>News Detail Page</h1>
      <p>Nes Id: {newsId}</p>
    </>
  );
}
