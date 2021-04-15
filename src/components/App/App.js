import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LoginManage from '../LoginManage/LoginManage';


/*
class App extends React.Component{

    state = { item: [], selectedItem: null};


    render(){
        return(



            <div className="ui container" style={{marginTop: "30px"}}> 
            <SearchBar/>
            </div>

        );
    }
}
*/

function App() {
    return (
        <div >
            <LoginManage />
        </div>

    );
}



export default App;