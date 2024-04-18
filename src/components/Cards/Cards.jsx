import "./Cards.css"

export default function Cards() {
    return (
        <ul className='about__cards list-reset'>
            <li className="about__cards-item">
                <p className="about__cards-title-part1">Авторитетных</p>
                <p className="about__cards-title-part2">Cпикеров</p>
                <span className="about__cards-number">3</span>
            </li>
            <li className="about__cards-item">
                <p className="about__cards-title-part1">Видов морских</p>
                <p className="about__cards-title-part2">Раковин</p>
                <span className="about__cards-number">+48</span>
            </li>
            <li className="about__cards-item">
                <p className="about__cards-title-part1">Мировых</p>
                <p className="about__cards-title-part2">Рекордов</p>
                <span className="about__cards-number">6</span>
            </li>
            <li className="about__cards-item">
                <p className="about__cards-title-part1">Опытных</p>
                <p className="about__cards-title-part2">Коллекционеров</p>
                <span className="about__cards-number">+15</span>
            </li>
        </ul>
    )
}
