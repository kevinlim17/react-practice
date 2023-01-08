import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="1984" numOfPage={500} />
            <Book name="Exhalation" numOfPage={600} /> 
            <Book name="Animal Farm" numOfPage={400} />
        </div>
    );
}
export default Library;