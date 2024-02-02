import {Character} from "./components/Character";

const App = () => {
    return (
        <div>
            <Character name={'Bart Simpson'} age={10}
                       img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />
            <Character name={'Homer Simpson'} age={40}
                       img={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />
            <Character name={'Marge Simpson'} age={38}
                       img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
            />
            <Character name={'Lisa Simpson'} age={9}
                       img={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
            />
            <Character name={'Maggie Simpson'} age={1}
                       img={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
            />
        </div>
    );
};

export {App};