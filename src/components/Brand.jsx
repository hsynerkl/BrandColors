import { useContext } from 'react'
import { getContrastYIQ } from '../helpers';
import MainContext from '../context/MainContext';
import Clipboard from 'react-clipboard.js';

const Brand = ({ brand }) => {

    const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext);

    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }
    const setColor = (color) => {
        setCopied(color)
    }

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>

            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map((color, index) => {
                    return (
                        <Clipboard component="span" key={index} onSuccess={() => { setColor(color) }} style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }} data-clipboard-text={color}>
                            {color}
                        </Clipboard>



                    )
                })}
            </div>

        </div>
    )
}

export default Brand