function Header(props) {
    return (
        <div className="bg-dark">
            <h1 className="container mx-auto text-lighter text-5xl font-semibold py-2">{props.text}</h1>
        </div>
    )
}

export default Header 