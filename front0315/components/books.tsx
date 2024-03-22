import { FunctionalComponent } from "preact";
import { Book } from "../types.ts";

const Books: FunctionalComponent<{docs: Book[] }> = (props) => {
    const books = props.docs

    return (
        <div>
            {
                books.map(b=> (<div key={b._id}> {b.name} </div>))
            }
        </div>
    )
}

export default Books