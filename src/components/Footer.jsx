function Footer() {
    return (
        <>
            <footer className="page-footer   blue-grey darken-4">


                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="https://github.com/PavelMelnik94/food-project">Repo</a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export {Footer}