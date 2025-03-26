import React, { useState } from 'react';

const MassivePage: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [searchNumber, setSearchNumber] = useState<number | ''>('');
  const [result, setResult] = useState<{ count: number; indices: number[] }>({ count: 0, indices: [] });

  const handleNumbersChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value;
    const numArray = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    setNumbers(numArray);
  };

  const handleSearchNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchNumber(value === '' ? '' : parseFloat(value));
  };

  const handleSearch = () => {
    if (typeof searchNumber === 'number') {
      const indices = numbers.reduce((acc: number[], num, index) => {
        if (num === searchNumber) {
          acc.push(index);
        }
        return acc;
      }, []);
      setResult({ count: indices.length, indices });
    }
  };

  return (
    <div>
      <h1>Поиск числа в массиве</h1>
      <textarea
        rows={5}
        placeholder="Введите числа через запятую"
        onChange={handleNumbersChange}
      />
      <br />
      <input
        type="number"
        placeholder="Введите число для поиска"
        value={searchNumber}
        onChange={handleSearchNumberChange}
      />
      <br />
      <button onClick={handleSearch}>Поиск</button>
      <h2>Результаты поиска:</h2>
      <p>Количество вхождений: {result.count}</p>
      <p>Индексы вхождений: {result.indices.join(', ')}</p>
    </div>
  );
};

export default MassivePage;