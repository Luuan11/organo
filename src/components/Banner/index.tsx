import './Banner.css'


interface BannerProps {
    sourceImage: string
    textAlt?: string
}

function Banner({ sourceImage, textAlt }:BannerProps) {
    return (
        <header className="banner">
            <img src={sourceImage}  alt={textAlt}/>
        </header>
        )
}

export default Banner
