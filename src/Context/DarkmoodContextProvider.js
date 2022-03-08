import React,{useState} from 'react';

export const DarkmoodProvider = React.createContext();
export const DarkmoodBtnProvider = React.createContext();

const DarkmoodContextProvider = ({children}) => {
    const [darkmood , setDarkmood] = useState(false);
    return (
            <DarkmoodProvider.Provider value={darkmood}>
                <DarkmoodBtnProvider.Provider value={setDarkmood} >
                    {children}
                </DarkmoodBtnProvider.Provider>
            </DarkmoodProvider.Provider>
    );
};

export default DarkmoodContextProvider;