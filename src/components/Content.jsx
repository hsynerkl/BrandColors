import MainContext from '../context/MainContext'
import Search from './Search';
import Brand from './Brand';
import { useContext } from 'react';
import LazyLoad from 'react-lazyload';

const Content = () => {

    const { brands } = useContext(MainContext);


    return (
        <main className="content">
            <header className="header">
                <Search />
            </header>
            <section className="brands">
                {brands.map((brand, index) => {
                    return (
                        <LazyLoad key={index} once={true} placeholder="Yükleniyor">
                            <Brand brand={brand} />
                        </LazyLoad>

                    )

                })}
            </section>
        </main>
    )
}

export default Content