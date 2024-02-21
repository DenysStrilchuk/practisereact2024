// import {MyComponent} from "./components/MyComponent";
//
// const App = () => {
//     return (
//         <div>
//             <MyComponent>
//                 <h3>Hello from children</h3>
//             </MyComponent>
//         </div>
//     );
// };
//
// export {App};

import {A} from "./components/A";
import {createContext} from "react";
const Context = createContext(null);

const App = () => {
    return (
        <div>
            <Context.Provider value={'Hello from context'}>
                <A/>
            </Context.Provider>

        </div>
    );
};

export {
    App,
    Context
};