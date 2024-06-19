import YouTube from 'react-youtube';

const Walkthrough = () => {
    const videoId = 'Zta_HloMIyI';
    return (
        <main>
            <section>
                <YouTube videoId={videoId} />
            </section>
        </main>
    );
}

export default Walkthrough;