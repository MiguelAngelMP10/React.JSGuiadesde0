import { useEffect, useState } from "react";

const jsonData = [
  {
    key: 1,
    name: "Name 1",
  },
  {
    key: 2,
    name: "Name 2",
  },
  {
    key: 3,
    name: "Name 3",
  },
  {
    key: 4,
    name: "Name 4",
  },
];
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <h2>Is loading....</h2>;
    }
    return jsonData?.map((value, index) => (
      <div key={value.key}>
        <p>{value.name}</p>
      </div>
    ));
  };
  return <div>{renderData()}</div>;
};

export default App;
