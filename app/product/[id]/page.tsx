export default function ProductDetails({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Product Details</h1>
      <p>Viewing product with ID: {params.id}</p>
    </main>
  );
}