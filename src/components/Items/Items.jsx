import './Items.css';
import Slider from '../Slider/Slider';

export default function Items() {
    return (
        <section className='items'>
            <div className="items__container">
                <h2 className='items__title'>ЭКСПОНАТЫ</h2>
                <Slider />
            </div>
        </section>
    )
}