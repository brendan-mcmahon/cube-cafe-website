import Page1 from "../assets/Page 1_transparent.png";
import Page2 from "../assets/Page 2_transparent.png";
import Page3 from "../assets/Page 3_transparent.png";
import Page4 from "../assets/Page 4_transparent.png";

const Home = () => {
    return (
        <main>
            <section>
                <div className="image-container">
                    <img className="image" src={Page1} alt="Image 1" />
                    <img className="image" src={Page2} alt="Image 2" />
                    <img className="image" src={Page3} alt="Image 3" />
                    <img className="image" src={Page4} alt="Image 4" />
                </div>
            </section>
        </main>
    )
}

export default Home;