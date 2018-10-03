import React from 'react';
import NavBar from '../components/Nav/Nav';
import PageLayout from '../components/PageLayout/PageLayout';

class Landing extends React.PureComponent {
    render() {
        return (
            <div>
                <PageLayout>
                    <NavBar title='Landing'/>
                    Welcome please come take a look around!

                    <p>This site is build using <a href="https://perl6.org/">Perl6</a>,
                        <a href="https://cro.services/">Cro</a>, 
                        <a href="https://reactjs.org/">React</a> and
                        <a href="https://reactjs.org/">Redux</a>!</p>
                </PageLayout>
            </div>
        );
    }
}

export default Landing
