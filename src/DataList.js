import React from 'react';
import useFetch from './useFetch';

const DataList = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>Data List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.map((item, index) => (
          <React.Fragment key={item.id}>
            <li style={{ background: index % 2 === 0 ? '#f0f0f0' : '#ffffff', padding: '10px', margin: '5px 0' }}>
              {item.name}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default DataList;
