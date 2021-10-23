import { useParams } from "react-router-dom";

export default function Project() {
    
    let { projId } = useParams();

    return (
        <>
            <h1>Você está vendo o projeto {projId}</h1>
            <p>dfjakldsjf klajsdklf jsdklf jklasdjf lkjas</p>
            <p>dfjakldsjf klajsdklf jsdklf jklasdjf lkjas</p>
            <p>dfjakldsjf klajsdklf jsdklf jklasdjf lkjas</p>
            <p>dfjakldsjf klajsdklf jsdklf jklasdjf lkjas</p>
            <p>dfjakldsjf klajsdklf jsdklf jklasdjf lkjas</p>
            <p>dfjakldsjf klajsdklf jsdklf jklasdjf lkjas</p>
        </>
    );

}