import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Copied from './components/Copied';
import MainContext from './context/MainContext';
import BrandsData from './brands.json';
import { useState, useEffect } from 'react'


function App() {

  const brandsArray = [];
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState('');


  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  }

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 5000)
  }, [copied])

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase())));
  }, [search])


  return (
    <>

      <MainContext.Provider value={data}>
        {copied ? <Copied color={copied} /> : ""}
        <Sidebar />
        <Content />

      </MainContext.Provider>

    </>
  );
}

export default App;
