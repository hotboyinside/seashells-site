import './DataView.css'

export default function PostersView() {
    return (
        <ul className="content-afisha__elements list-reset">
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">МУРЕКС</h3>
                <address className='content-afisha__address'>Москва, МВЦ “Крокус Экспо”</address>
                <time className='content-afisha__date'>11/09/2024</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">СИЯНИЕ</h3>
                <address className='content-afisha__address'>Екатеринбург, ул.&nbsp;Высоцкого,&nbsp;14</address>
                <time className='content-afisha__date'>17/09/2024</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">ВОЛЮТА</h3>
                <address className='content-afisha__address'>Санкт-Петербург, 29-я линия В.О.,&nbsp;2</address>
                <time className='content-afisha__date'>28/09/2024</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">КОЛЮЧКА</h3>
                <address className='content-afisha__address'>Москва, арт-галерея VEKARTA</address>
                <time className='content-afisha__date'>04/10/2024</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">УЛИТКА</h3>
                <address className='content-afisha__address'>Санкт-Петербург, “Лофт Проект Этажи”</address>
                <time className='content-afisha__date'>27/10/2024</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">НАУТИЛУС</h3>
                <address className='content-afisha__address'>Новосибирск, Лофт-парк “Подземка”</address>
                <time className='content-afisha__date'>02/11/2024</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">ЦИПРЕЯ</h3>
                <address className='content-afisha__address'>Калининград , ВЦ&nbsp;“Балтик-&nbsp;Экспо”</address>
                <time className='content-afisha__date'>н/д</time>
            </li>
            <li className="content-afisha__elem">
                <h3 className="content-afisha__elem-title">КОНУС</h3>
                <address className='content-afisha__address'>Казань, МВЦ “Казань Экспо”</address>
                <time className='content-afisha__date'>н/д</time>
            </li>
        </ul>
    )
}
