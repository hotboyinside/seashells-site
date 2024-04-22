import Button from '../Button/Button'
import './Footer.css'

export default function Footer() {
    return(
        <footer className='footer'>
            <div className="container footer__container">
                <ul className="footer__social social list-reset">
                    <li className='social__item'>
                        <a href="" className="social__link">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="33" height="33" rx="5.70302" fill="#333333"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.1287 11.748C26.2681 11.3118 26.1287 10.9912 25.465 10.9912H23.2702C22.7122 10.9912 22.4549 11.2681 22.3154 11.5735C22.3154 11.5735 21.1992 14.1255 19.6181 15.7832C19.1066 16.263 18.8741 16.4157 18.595 16.4157C18.4555 16.4157 18.2536 16.263 18.2536 15.8268V11.748C18.2536 11.2245 18.0916 10.9912 17.6265 10.9912H14.1776C13.8289 10.9912 13.6192 11.2342 13.6192 11.4644C13.6192 11.9607 14.4097 12.0751 14.4912 13.4711V16.503C14.4912 17.1677 14.3632 17.2882 14.0842 17.2882C13.3402 17.2882 11.5303 14.7248 10.4569 11.7916C10.2465 11.2215 10.0355 10.9912 9.4746 10.9912H7.27984C6.65276 10.9912 6.52734 11.2681 6.52734 11.5735C6.52734 12.1188 7.27141 14.8235 9.99186 18.4006C11.8055 20.8435 14.3608 22.1677 16.6859 22.1677C18.081 22.1677 18.2536 21.8736 18.2536 21.367V19.5206C18.2536 18.9324 18.3858 18.815 18.8276 18.815C19.1531 18.815 19.7111 18.9677 21.0133 20.1455C22.5014 21.5415 22.7467 22.1677 23.5837 22.1677H25.7785C26.4056 22.1677 26.7191 21.8736 26.5382 21.2932C26.3403 20.7147 25.6298 19.8754 24.6871 18.8804C24.1755 18.3133 23.4082 17.7026 23.1757 17.3972C22.8501 17.0046 22.9432 16.8301 23.1757 16.4811C23.1757 16.4811 25.8497 12.9476 26.1287 11.748Z" fill="white"/>
                            </svg>
                        </a>
                    </li>
                    <li className='social__item'>
                        <a href="" className="social__link">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.7 0C2.55198 0 0 2.55198 0 5.7V27.3C0 30.448 2.55198 33 5.7 33H27.3C30.448 33 33 30.448 33 27.3V5.7C33 2.55198 30.448 0 27.3 0H5.7ZM25.1799 7.96087C23.101 5.88059 20.3792 4.67606 17.4582 4.5325L16.8714 4.51799C10.3977 4.51799 5.12879 9.78397 5.12619 16.2565C5.12534 18.3256 5.66618 20.3451 6.69401 22.1254L5.02771 28.2086L11.254 26.5762C12.9695 27.5115 14.901 28.0044 16.8668 28.005H16.8716C23.3447 28.005 28.6141 22.7386 28.6167 16.2658C28.6179 13.1292 27.3973 10.1797 25.1799 7.96087ZM11.899 24.6624L11.5425 24.451L7.84772 25.4197L8.83391 21.8191L8.6018 21.4499C7.6246 19.8964 7.10851 18.1009 7.10924 16.2572C7.11139 10.8775 11.4907 6.50073 16.8755 6.50073C19.4829 6.50158 21.9339 7.51789 23.7771 9.36228C25.6202 11.2065 26.6346 13.658 26.6336 16.2652C26.6315 21.6453 22.2522 26.0225 16.8716 26.0225H16.8676C15.1159 26.0218 13.3978 25.5514 11.899 24.6624ZM22.3867 18.7933C22.5914 18.8921 22.7297 18.9589 22.7887 19.0574C22.8621 19.1797 22.8621 19.767 22.6175 20.4523C22.373 21.1374 21.2005 21.7628 20.6367 21.847C20.131 21.9226 19.4913 21.954 18.7882 21.7308C18.362 21.5956 17.8154 21.4151 17.1152 21.1129C14.3641 19.9254 12.5048 17.2604 12.1533 16.7566C12.1287 16.7213 12.1115 16.6966 12.1019 16.6837L12.0993 16.6803C11.9433 16.4722 10.9035 15.0851 10.9035 13.6494C10.9035 12.2981 11.5677 11.5898 11.8733 11.264C11.8942 11.2417 11.9135 11.2212 11.9307 11.2024C12.1997 10.9086 12.5176 10.8353 12.7133 10.8353C12.9089 10.8353 13.1047 10.8372 13.2757 10.8456C13.2968 10.8467 13.3187 10.8466 13.3414 10.8464C13.5124 10.8454 13.7257 10.8442 13.9361 11.3491C14.0169 11.5434 14.1352 11.8313 14.26 12.1349C14.5126 12.7496 14.7918 13.4289 14.8409 13.5272C14.9142 13.674 14.9631 13.8452 14.8653 14.041C14.8506 14.0705 14.837 14.0982 14.824 14.1248C14.7506 14.2747 14.6965 14.3849 14.5719 14.5304C14.523 14.5875 14.4724 14.649 14.4219 14.7105C14.3208 14.8336 14.2196 14.9566 14.1316 15.0443C13.9847 15.1905 13.8318 15.3493 14.003 15.6429C14.1742 15.9366 14.7631 16.8971 15.6356 17.6749C16.5735 18.5111 17.3887 18.8645 17.8018 19.0436C17.8824 19.0786 17.9477 19.1069 17.9956 19.1308C18.289 19.2777 18.4602 19.2531 18.6314 19.0574C18.8026 18.8616 19.3651 18.2009 19.5607 17.9073C19.7563 17.6137 19.9519 17.6626 20.221 17.7604C20.49 17.8583 21.9328 18.5679 22.2263 18.7148C22.2835 18.7434 22.3371 18.7693 22.3867 18.7933Z" fill="#333333"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <span className='footer__question'>Есть вопрос?</span>
                <div className='footer__buttons'>
                    <Button>Почта</Button>
                    <Button>Телеграмм-чат</Button>
                </div>
            </div>
        </footer>
    )
}