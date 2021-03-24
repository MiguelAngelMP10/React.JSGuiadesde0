export default function SearchResultsItem({ name, email }) {
  return (
    <div
      style={{
        backgroundColor: "#E8E7E7",
        marginBottom: 5,
        marginTop: 5,
        padding: 10,
        width: "100%",
      }}
    >
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}
