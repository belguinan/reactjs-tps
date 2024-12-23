import Header from './Header';
import Left from './Left';
import Main from './Main';
import './sass/app.scss';

function App() {

    return (

        <div className='container'>

            <div className='row text-white rounded-3 p-3 text-dark bg-secondary my-3'>
                <div className='col-12'>
                    <Header>
                        Header
                    </Header>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-3'>
                    <Left className='h-100 text-white rounded-3 p-3 text-dark bg-secondary' style={{minHeight: '300px'}} />
                </div>

                <div className='col-9'>
                    <Main />
                </div>
            </div>
            
        </div>

    );
}

export default App;
