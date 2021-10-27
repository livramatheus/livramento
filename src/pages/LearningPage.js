function LearningPage() {
    return (
        <>
            <h1>What am I learning right now?</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>

            <div className="learning-checklist">
                <div className="learning-checklist-section">
                    <h2>Learning:</h2>

                    <div className="learning-checklist-section-list">
                        <span>Lorem Ipsum</span>
                        <span>Ut labore</span>
                        <span>Adipiscing elit</span>
                    </div>
                </div>

                <div className="learning-checklist-section">
                    <h2>Done!</h2>

                    <div className="learning-checklist-section-list">
                        <del>Lorem Ipsum</del>
                        <del>Sit amet</del>
                        <del>Ipsum dolor</del>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LearningPage;