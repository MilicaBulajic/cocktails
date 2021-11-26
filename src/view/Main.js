import React from 'react';

const Main = () => {
    return (
        <main className="container">
        <Switch>
            <Route exact path="/" component={LandingPage} />
        </Switch>
    </main>
    );
};

export default Main;