export default function TitleTextAndImg({title, text, img_source}) {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
            <div>
                <img src={img_source}/>
            </div>`
        </div>
    )
}

