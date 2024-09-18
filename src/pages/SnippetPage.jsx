import { Fragment } from "react";
import SnippetRCC from "../components/Snippets/SnippetRCC";
import SnippetRCE from "../components/Snippets/SnippetRCE";
import SnippetRFC from "../components/Snippets/SnippetRFC";
import SnippetsRFCE from "../components/Snippets/SnippetsRFCE";
import { SnippetRAFC } from "../components/Snippets/SnippetRAFC";
import SnippetRAFCE from "../components/Snippets/SnippetRAFCE";

function SnippetsPage() {
    return <Fragment>
        <SnippetRCC />
        <SnippetRCE />
        <SnippetRFC />
        <SnippetsRFCE />
        <SnippetRAFC />
        <SnippetRAFCE />
    </Fragment>
}

export default SnippetsPage